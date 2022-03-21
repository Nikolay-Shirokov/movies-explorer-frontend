import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
      </ul>
      {props.itSavedMovies ? null :
        <button className="movies-cards__more-button active-element">Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
