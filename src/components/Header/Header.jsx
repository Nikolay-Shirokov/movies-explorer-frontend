import './Header.css';
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header(props) {

  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const pagesWithHeader = ['/', '/movies', '/saved-movies', '/profile'];

  if (!pagesWithHeader.includes(location.pathname)) {
    return null;
  }

  const isLogged = currentUser.loggedIn;
  const classNameOfLink = ({ isActive }) => `header__link ${isActive ? 'header__link_active' : ''} active-element`;

  return (
    <header className="header">
      <Link to='/' className="header__logo active-element" aria-label="Перейти на главную"></Link>
      {!isLogged ?
        <nav className="header__nav-links">
          <Link to='/signup' className="header__link active-element" aria-label="Регистрация">Регистрация</Link>
          <Link to='/signin' className="header__link header__link_type_button active-element" aria-label="Войти под существующим пользователем">Войти</Link>
        </nav>
        :
        <>
          <nav className="header__nav-links header__nav-links_logged">
            <NavLink to="/movies" className={classNameOfLink}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={classNameOfLink}>Сохранённые фильмы</NavLink>
            <Link to="/profile" className="header__link header__link_type_profile">Аккаунт</Link>
          </nav>
          <Navigation />
        </>
      }
    </header>
  );
}

export default Header;
