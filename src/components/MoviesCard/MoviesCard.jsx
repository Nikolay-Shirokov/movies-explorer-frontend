import './MoviesCard.css';
import image from '../../images/movie-preview.webp';
import { useState } from 'react';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = useState(props.isSaved || false);
  const handlerSaveButtonClick = () => setIsSaved(!isSaved);
  const saveButtonClassArray = [
    'movies-card__save-button',
    isSaved?'movies-card__save-button_type_saved': '',
    props.itSavedMovies?'movies-card__save-button_type_unsave':'',
    'active-element'
  ];

  return (
    <li className="movies-card">
      <img className="movies-card__preview-image" src={image} alt="Кадр из фильма" />
      <h3 className="movies-card__title">33 слова о дизайне</h3>
      <button className={saveButtonClassArray.join(' ')} onClick={handlerSaveButtonClick}></button>
      <p className="movies-card__duration">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
