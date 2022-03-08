import './Footer.css';
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="footer__links">
          <a href="https://practicum.yandex.ru/web/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/Nikolay-Shirokov" className="footer__link" target="_blank" rel="noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
