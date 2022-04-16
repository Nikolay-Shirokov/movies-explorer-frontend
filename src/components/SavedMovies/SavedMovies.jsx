import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';

function SavedMovies(props) {

  const [moviesArray, setMoviesArray] = useState([]);

  return (
    <main className="movies">
      <SearchForm getMovies={props.getMovies} moviesArray={moviesArray} setMoviesArray={setMoviesArray} />
      <MoviesCardList itSavedMovies={true} {...props} moviesArray={moviesArray}/>
    </main>
  );
}

export default SavedMovies;
