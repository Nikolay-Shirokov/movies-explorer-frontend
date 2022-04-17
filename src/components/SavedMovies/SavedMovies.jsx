import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_ERROR_MESSAGE } from '../../utils/const';

function SavedMovies(props) {

  const location = useLocation();
  const pathname = location.pathname;

  const [moviesArray, setMoviesArray] = useState([]);

  const [info, setInfo] = useState();

  useEffect(() => {
    props.getMovies()
      .then(movies => {
        const moviesNotFiltered = movies.map(movie => {
          movie.isSaved = true;
          return movie;
        })
        setMoviesArray(moviesNotFiltered);
        localStorage.setItem(pathname, JSON.stringify(moviesNotFiltered));
      })
      .catch(err => {
        setInfo({ error: true, text: err.message || DEFAULT_ERROR_MESSAGE })
      })
  }, []);

  const getMovies = () => {
    const moviesJSON = localStorage.getItem(pathname);
    const moviesNotFiltered = !moviesJSON ? [] : JSON.parse(moviesJSON);
    return Promise.resolve(moviesNotFiltered || []);
  }

  return (
    <main className="movies">
      <SearchForm
        initialValues={{
          info,
        }}
        getMovies={getMovies}
        moviesArray={moviesArray}
        setMoviesArray={setMoviesArray} />
      <MoviesCardList itSavedMovies={true} {...props} moviesArray={moviesArray} />
    </main>
  );
}

export default SavedMovies;
