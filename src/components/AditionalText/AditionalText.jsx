import './AditionalText.css';
import { Link } from "react-router-dom";

function AditionalText(props) {
  return (
    <p className="aditional-text">
      {props.text}
      <Link
        className="aditional-text__link"
        to={props.linkTo}
      >
        {props.linkText}
      </Link>
    </p>
  );
}

export default AditionalText;
