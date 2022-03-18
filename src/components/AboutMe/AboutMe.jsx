import SectionTitle from '../SectionTitle/SectionTitle';
import image from "../../images/avatar.webp";
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle text="Студент"></SectionTitle>
      <div className="about-me__wrapper">
        <article className="about-me__descripton">
          <h3 className="about-me__title">Николай</h3>
          <p className="about-me__subtitle">Разработчик, 35 лет</p>
          <p className="about-me__text">Живу в Санкт-Петербурге. В 2009 году окончил СПбГУАП
            по специальности радиоэлектроника. С тех пор работаю разработчиком
            на платформе 1С. На текущий момент в ГК "Корус Консалтинг"</p>
          <div className="about-me__space"></div>
          <ul className="about-me__links">
            <li className="about-me__link-item">
              <a href="https://github.com/Nikolay-Shirokov" className="about-me__link active-element">GitHub</a>
            </li>
          </ul>
        </article>
        <img src={image} alt="Аватарка" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
