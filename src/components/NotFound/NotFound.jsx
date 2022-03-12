import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="error">
      <h2 className="error__code">404</h2>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__link">Назад</Link>
    </main>
  );
}

export default NotFound;
