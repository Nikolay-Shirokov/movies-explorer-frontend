import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://nikolay-shirokov.github.io/how-to-learn/" className="portfolio__link active-element" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Статичный сайт</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://nikolay-shirokov.github.io/russian-travel/" className="portfolio__link active-element" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://nikolay-shirokov.github.io/react-mesto-auth/" className="portfolio__link active-element" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
