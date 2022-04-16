import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MovieApi';

function Movies() {

  const [moviesArray, setMoviesArray] = useState([]);

  const getMovies = () => {
    return moviesApi.getAllMovies();
  }

/*   useEffect(() => {
    moviesApi.getAllMovies()
      .then(res => {
        setMoviesArray(res)
      })
  }, []) */

  return (
    <main className="movies">
      <SearchForm getMovies={getMovies} setMoviesArray={setMoviesArray} />
      <MoviesCardList moviesArray={moviesArray} />
    </main>
  );
}

export default Movies;
