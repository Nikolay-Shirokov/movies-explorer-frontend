import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import './SearchForm.css';
import { MOVIE_DURATION_SHORTLIMIT, DEFAULT_ERROR_MESSAGE, LOCATION } from '../../utils/const';
import { defineSavedState } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {

  const { moviesArray, setMoviesArray } = props;

  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({ searchText: '', shortfilm: false })
  const [moviesAll, setMoviesAll] = useState([]);

  const emptyInfo = {text: '', error: false};
  const [info, setInfo] = useState(props.initialValues.info || emptyInfo);

  function filterMovies(moviesNotFiltered) {
    const newMoviesArray = moviesNotFiltered.filter(
      (movie) =>
        ((movie.nameRU && movie.nameRU.toLowerCase().includes(searchParams.searchText.toLowerCase()))
          || (movie.nameEN && movie.nameEN.toLowerCase().includes(searchParams.searchText.toLowerCase()))
          || (movie.description && movie.description.toLowerCase().includes(searchParams.searchText.toLowerCase())))
        && (!searchParams.shortfilm || movie.duration <= MOVIE_DURATION_SHORTLIMIT)
    )
    setMoviesArray(newMoviesArray);
  }

  function saveParams() {
    if (location.pathname !== LOCATION.MOVIES) {
      return;
    }
    localStorage.setItem(LOCATION.MOVIES, JSON.stringify({
      searchParams,
      moviesAll,
      moviesArray
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setInfo(emptyInfo);
    props.getMovies()
      .then(moviesNotFiltered => {
        setMoviesAll(moviesNotFiltered);
        filterMovies(moviesNotFiltered);
        saveParams();
      })
      .catch(err => {
        setInfo({error: true, text: err.message || DEFAULT_ERROR_MESSAGE})
      })
      .finally(() => setIsLoading(false))
  }

  function handleChange(event) {
    const { name, value, checked, type } = event.target
    setSearchParams({
      ...searchParams,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  useEffect(() => {
    if (location.pathname === LOCATION.MOVIES) {
      const restoredParamsJSON = localStorage.getItem(LOCATION.MOVIES);
      const savedMoviesJSON = localStorage.getItem(LOCATION.SAVED_MOVIES);

      if (!restoredParamsJSON) {
        return;
      }

      const restoredParams = JSON.parse(restoredParamsJSON);
      const savedMovies = !savedMoviesJSON? []: JSON.parse(savedMoviesJSON);

      const restoredMovies = defineSavedState(restoredParams.moviesAll, savedMovies);

      setMoviesAll(restoredMovies);
      setSearchParams(restoredParams.searchParams || searchParams);
      filterMovies(restoredMovies);

    } else {
      const savedMovies = localStorage.getItem(LOCATION.SAVED_MOVIES);
      setMoviesAll(!savedMovies, [], JSON.parse(savedMovies));
    }
  }, [])

  useEffect(() => {
    filterMovies(moviesAll);
  }, [searchParams.shortfilm])

  useEffect(() => {
    if (searchParams.searchText
        && !info.error
        && moviesArray.length === 0) {
      setInfo({error: false, text: 'Ничего не найдено'})
    }
  }, [moviesArray])

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" placeholder="Фильм" required name="searchText" value={searchParams.searchText} onChange={handleChange} autoComplete="off"/>
        <button type="submit" className="search__button active-element"></button>
      </form>
      <FilterCheckbox checked={searchParams.shortfilm} handleChange={handleChange} />
      <p className={`search__info-text ${info.error? 'search__info-text_type_error': ''}`}>{info.text}</p>
      <Preloader isVisible={isLoading} />
    </section>
  );
}

export default SearchForm;
