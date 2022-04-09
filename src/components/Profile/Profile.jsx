import './Profile.css';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation(currentUser);

  const defaultErrorText = 'Что-то пошло не так! Попробуйте ещё раз.';
  const [status, setStatus] = useState({ ok: true, text: defaultErrorText });

  let isModifed = false;
  for (let key of Object.keys(values)) {
    if (values[key] !== currentUser[key]) {
      isModifed = true;
      break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(values)
      .then(res => {
        setStatus({
          ok: true,
          text: props.succesText || 'Успешно!',
        })
      })
      .catch(err => {
        setStatus({
          ok: false,
          text: err.message || defaultErrorText,
        })
      })
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <h2 className="profile__title">Привет, <span className="profile__name">{currentUser.name}</span>!</h2>
        <ul className="profile__fields">
          <li className="profile__field">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input className="profile__value" type="text" name="name" id="name" placeholder="Укажите имя.." value={values.name} onChange={handleChange} />
            <span className={`profile__input-error ${!errors.name ? '' : 'profile__input-error_visible'}`} data-input-name="name">{errors.name}</span>
          </li>
          <li className="profile__field">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input className="profile__value" type="email" name="email" id="email" placeholder="Укажите email.." value={values.email} onChange={handleChange} />
            <span className={`profile__input-error ${!errors.email ? '' : 'profile__input-error_visible'}`} data-input-name="email">{errors.email}</span>
          </li>
        </ul>
        <p className={`profile__submit-error ${status.ok ? '' : 'profile__submit-error_visible'}`}>{status.text}</p>
        <button
          className={`profile__edit-button ${!(isValid&&isModifed) ? 'profile__edit-button_disabled' : 'active-element'}`}
          type="submit"
          disabled={!(isValid&&isModifed)}
        >Редактировать</button>
      </form>
      <button className="profile__signout-button active-element">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
