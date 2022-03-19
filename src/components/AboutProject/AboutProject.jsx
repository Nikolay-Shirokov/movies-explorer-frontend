import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle text="О проекте"></SectionTitle>
      <ul className="about-project__descriptions">
        <li className="about-project__description">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__description">
          <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__timelaps">
        <li className="about-project__interval about-project__interval_count_one">
          <p className="about-project__interval-text about-project__interval-text_accent">1 неделя</p>
          <h4 className="about-project__interval-title">Back-end</h4>
        </li>
        <li className="about-project__interval about-project__interval_count_four">
          <p className="about-project__interval-text">4 недели</p>
          <h4 className="about-project__interval-title">Front-end</h4>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
