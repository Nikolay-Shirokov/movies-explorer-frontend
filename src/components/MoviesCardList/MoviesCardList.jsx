import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { SCREEN_WIDTH } from "../../utils/const";

function MoviesCardList(props) {

  const { itSavedMovies, moviesArray } = props;

  const [moviesQtyLimit, setMoviesQtyLimit] = useState(0);
  const [moviesQtyMore, setMoviesQtyMore] = useState(0);

  function calcMoviesQtyLimit() {

    if (itSavedMovies) {
      setMoviesQtyLimit(9999);
      return;
    }

    const windowWidth = window.innerWidth;

    if (windowWidth >= SCREEN_WIDTH.LARGE) {
      setMoviesQtyLimit(12);
    } else if (windowWidth >= SCREEN_WIDTH.MEDIUM) {
      setMoviesQtyLimit(9);
    } else {
      setMoviesQtyLimit(6);
    }

  }

  function calcMoviesQtyMore() {

    if (itSavedMovies) {
      setMoviesQtyMore(0);
      return;
    }

    const windowWidth = window.innerWidth;

    if (windowWidth >= SCREEN_WIDTH.LARGE) {
      setMoviesQtyMore(4);
    } else if (windowWidth >= SCREEN_WIDTH.MEDIUM) {
      setMoviesQtyMore(3);
    } else {
      setMoviesQtyMore(2);
    }

  }

  function handleResize() {
    setTimeout(() => {
      calcMoviesQtyLimit();
      calcMoviesQtyMore();
    }, 60)
  }

  function renderMoviesCards() {
    return moviesArray
      .slice(0, moviesQtyLimit)
      .map((movie) => (
        <MoviesCard
          {...movie}
          key={movie.id || movie._id}
          saveMovie={props.saveMovie}
          unsaveMovie={props.unsaveMovie}
          itSavedMovies={itSavedMovies}
        />
      ));
  }

  function handleMoreButtonClick() {
    setMoviesQtyLimit(moviesQtyLimit + moviesQtyMore);
  }

  useEffect(() => {
    calcMoviesQtyLimit();
    calcMoviesQtyMore();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {renderMoviesCards()}
      </ul>
      {moviesArray.length <= moviesQtyLimit ? null :
        <button className="movies-cards__more-button active-element" onClick={handleMoreButtonClick}>Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
