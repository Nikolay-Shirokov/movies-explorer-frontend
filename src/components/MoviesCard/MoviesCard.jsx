import './MoviesCard.css';
import image from '../../images/movie-preview.webp';

function MoviesCard() {
  return (
    <li className="movies-card">
      <img className="movies-card__preview-image" src={image} alt="Кадр из фильма" />
      <h3 className="movies-card__title">33 слова о дизайне</h3>
      <button className="movies-card__save-button"></button>
      <p className="movies-card__duration">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
