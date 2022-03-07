import './Header.css';
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to='/' className="header__logo" aria-label="Перейти на главную"></Link>
      <nav className="header__nav-links">
        <Link to='/signin' className="header__link" aria-label="Регистрация">Регистрация</Link>
        <Link to='/signup' className="header__link header__link_type_button" aria-label="Войти под существующим пользователем">Войти</Link>
      </nav>
    </header>
  );
}

export default Header;
