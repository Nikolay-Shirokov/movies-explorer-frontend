import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SavedMovies(props) {

  const location = useLocation();

  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(()=> {
    props.getMovies()
      .then(moviesNotFiltered => {
        setMoviesArray(moviesNotFiltered);
        localStorage.setItem(location, moviesNotFiltered);
      })
  }, []);

  function getMovies() {
    const moviesNotFiltered = localStorage.getItem(location);
    return Promise.resolve(moviesNotFiltered || []);
  }

  return (
    <main className="movies">
      <SearchForm getMovies={getMovies} moviesArray={moviesArray} setMoviesArray={setMoviesArray} />
      <MoviesCardList itSavedMovies={true} {...props} moviesArray={moviesArray}/>
    </main>
  );
}

export default SavedMovies;
