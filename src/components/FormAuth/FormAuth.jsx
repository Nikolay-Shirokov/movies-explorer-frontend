import './FormAuth.css';
import { Link } from "react-router-dom";

function FormAuth(props) {
  return (
    <main className="form-auth">
      <Link className="form-auth__link-home active-element" to="/"/>
      <h2 className="form-auth__title">{props.title}</h2>
      <form className="form-auth__form">
        {props.children}
        <div className="form-auth__space"></div>
        <button className="form-auth__submit-button active-element" type="submit">{props.submitTitle}</button>
        {props.aditionalText}
      </form>
    </main>
  );
}

export default FormAuth;
