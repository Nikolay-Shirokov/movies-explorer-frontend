import './Profile.css';

function Profile(props) {
  return (
    <main className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, <span className="profile__name">Виталий</span>!</h2>
        <ul className="profile__fields">
          <li className="profile__field">
            <label className="profile__label">Имя</label>
            <input className="profile__value" value={"Виталий"}/>
          </li>
          <li className="profile__field">
            <label className="profile__label">E-mail</label>
            <input className="profile__value" value={"pochta@yandex.ru"}/>
          </li>
        </ul>
        <button className="profile__edit-button active-element" type="submit">Редактировать</button>
      </form>
      <button className="profile__signout-button active-element">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
