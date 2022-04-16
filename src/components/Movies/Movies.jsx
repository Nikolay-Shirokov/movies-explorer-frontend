import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function Movies(props) {

  const [moviesArray, setMoviesArray] = useState([]);

/*   useEffect(() => {
      })
  }, []) */

  return (
    <main className="movies">
      <SearchForm getMovies={props.getMovies} moviesArray={moviesArray} setMoviesArray={setMoviesArray} />
      <MoviesCardList {...props} moviesArray={moviesArray} />
    </main>
  );
}

export default Movies;
