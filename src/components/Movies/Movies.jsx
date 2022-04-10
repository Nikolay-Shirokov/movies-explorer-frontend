import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MovieApi';

function Movies() {

  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    moviesApi.getAllMovies()
      .then(res => {
        setMoviesArray(res)
      })
  }, [])

  return (
    <main className="movies">
      <SearchForm/>
      <Preloader/>
      <MoviesCardList moviesArray={moviesArray} />
    </main>
  );
}

export default Movies;
