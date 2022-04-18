import './FormAuth.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function FormAuth(props) {

  const { values, isValid } = props;

  const defaultErrorText = 'Что-то пошло не так! Попробуйте ещё раз.';

  const [status, setStatus] = useState({ ok: true, text: defaultErrorText });

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
    <main className="form-auth">
      <Link className="form-auth__link-home active-element" to="/" />
      <h2 className="form-auth__title">{props.title}</h2>
      <form className="form-auth__form" onSubmit={handleSubmit} noValidate>
        {props.children}
        <div className="form-auth__space"></div>
        <p className={`form-auth__submit-error ${status.ok?'':'form-auth__submit-error_visible'}`}>{status.text}</p>
        <button
          className={`form-auth__submit-button ${!isValid ? 'form-auth__submit-button_disabled' : 'active-element'}`}
          type="submit"
          disabled={!isValid}
        >
          {props.submitTitle}
        </button>
        {props.aditionalText}
      </form>
    </main>
  );
}

export default FormAuth;
