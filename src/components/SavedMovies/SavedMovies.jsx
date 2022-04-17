import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SavedMovies(props) {

  const location = useLocation();
  const pathname = location.pathname;

  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(()=> {
    props.getMovies()
      .then(moviesNotFiltered => {
        setMoviesArray(moviesNotFiltered);
        localStorage.setItem(pathname, JSON.stringify(moviesNotFiltered));
      })
  }, []);

  const getMovies = () => {
    const moviesJSON = localStorage.getItem(pathname);
    const moviesNotFiltered = !moviesNotFiltered? []: JSON.parse(moviesJSON);
    console.log(moviesJSON);
    console.dir(moviesNotFiltered);
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
