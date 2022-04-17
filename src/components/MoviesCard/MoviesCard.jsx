import './MoviesCard.css';
import { useState } from 'react';
import { calcPath } from '../../utils/utils';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = useState(props.isSaved || props.itSavedMovies || false);

  const sendQuery = () => {
    if (isSaved) {
      return props.unsaveMovie(props);
    }

    return props.saveMovie(props);
  }

  const handlerSaveButtonClick = () => {

    sendQuery()
      .then(res => {
        setIsSaved(!isSaved);
      })
  }

  const saveButtonClassArray = [
    'movies-card__save-button',
    isSaved ? 'movies-card__save-button_type_saved' : '',
    props.itSavedMovies ? 'movies-card__save-button_type_unsave' : '',
    'active-element'
  ];

  function calcDuraton(durationInMinutes) {
    const hourQty = Math.trunc(durationInMinutes / 60);
    const minutesQty = durationInMinutes % 60;
    return `${hourQty > 0 ? `${hourQty}ч` : ''}${minutesQty}м`;
  }

  return (
    <li className="movies-card">
      <a className="movies-card__link" target="_blank" href={props.trailerLink}>
        <img className="movies-card__preview-image" src={props.image.url?calcPath(props.image.url):props.image} alt={props.image.alternativeText || 'Кадр из фильма'} />
      </a>
      <h3 className="movies-card__title">{props.nameRU}</h3>
      <button className={saveButtonClassArray.join(' ')} onClick={handlerSaveButtonClick}></button>
      <p className="movies-card__duration">{calcDuraton(props.duration)}</p>
    </li>
  );
}

export default MoviesCard;
