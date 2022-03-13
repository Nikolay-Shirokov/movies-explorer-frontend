import './FormField.css';

function FormField(props) {
  return (
    <label className="form-field">
      <span className="form-field__label">{props.label}</span>
      <input
        value={props.value || ''}
        onChange={props.handleChange}
        className={`form-field__input ${!props.error ? '' : 'form-field__input_type_error'}`}
        type={props.type}
        name={props.name}
        required />
      <span
        className={`form-field__input-error ${!props.error ? '' : 'form-field__input-error_visible'}`}
        data-input-name={props.name}
      >
        {props.error}
      </span>
    </label>
  );
}

export default FormField;
