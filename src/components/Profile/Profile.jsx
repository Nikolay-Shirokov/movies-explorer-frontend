import './Profile.css';

function Profile(props) {
  return (
    <main className="profile">
      <h2 className="profile__title">Привет, <span className="profile__name">Виталий</span>!</h2>
      <ul className="profile__fields">
        <li className="profile__field">
          <p className="profile__label">Имя</p>
          <p className="profile__value">Виталий</p>
        </li>
        <li className="profile__field">
          <p className="profile__label">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </li>
      </ul>
      <button className="profile__edit-button">Редактировать</button>
      <button className="profile__signout-button">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
