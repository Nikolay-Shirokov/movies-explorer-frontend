import './Navigation.css';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { LOCATION } from '../../utils/const';

function Navigation() {

  const [ isOpen, setIsOpen ] = useState(false);
  const handleOpenCloseButtonClick = () => setIsOpen(!isOpen);
  const classNameOfLink = ({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''} active-element`;

  return (
    <div className="navigation">
      <button className="navigation__open-button active-element" onClick={handleOpenCloseButtonClick}></button>
      <div className={`navigation__overlay ${isOpen?'navigation__overlay_opened':''}`}>
        <nav className="navigation__menu">
          <button className="navigation__close-button active-element" onClick={handleOpenCloseButtonClick}></button>
          <NavLink to={LOCATION.HOME} className={classNameOfLink} onClick={handleOpenCloseButtonClick}>Главная</NavLink>
          <NavLink to={LOCATION.MOVIES} className={classNameOfLink} onClick={handleOpenCloseButtonClick}>Фильмы</NavLink>
          <NavLink to={LOCATION.SAVED_MOVIES} className={classNameOfLink} onClick={handleOpenCloseButtonClick}>Сохранённые фильмы</NavLink>
          <div className="navigation__space"></div>
          <Link to={LOCATION.PROFILE} className="navigation__link navigation__link_type_profile" onClick={handleOpenCloseButtonClick}>Аккаунт</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
