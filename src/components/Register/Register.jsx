import FormAuth from '../FormAuth/FormAuth';
import AditionalText from '../AditionalText/AditionalText';
import FormField from '../FormField/FormField';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Register(props) {

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  return (
    <FormAuth
      title="Добро пожаловать!"
      submitTitle="Зарегистрироваться"
      isValid={isValid}
      values={values}
      handleSubmit={props.handleSubmit}
      aditionalText={<AditionalText
        text="Уже зарегистрированы?"
        linkTo="/signin"
        linkText="Войти"
      />}
    >
      <FormField
        label="Имя"
        type="text"
        name="name"
        value={values.name}
        error={errors.name}
        pattern="[a-zA-Zа-яёА-ЯЁ\s\-]*"
        handleChange={handleChange}
      />
      <FormField
        label="E-mail"
        type="email"
        name="email"
        value={values.email}
        error={errors.email}
        handleChange={handleChange}
      />
      <FormField
        label="Пароль"
        type="password"
        name="password"
        value={values.password}
        error={errors.password}
        handleChange={handleChange}
      />
    </FormAuth>
  );
}

export default Register;
