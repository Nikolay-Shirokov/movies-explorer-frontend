import FormAuth from '../FormAuth/FormAuth';
import AditionalText from '../AditionalText/AditionalText';
import FormField from '../FormField/FormField';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login(props) {

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  return (
    <FormAuth
      title="Рады видеть!"
      submitTitle="Войти"
      aditionalText={<AditionalText
        text="Ещё не зарегистрированы?"
        linkTo="/Register"
        linkText="Регистрация"
      />}
    >
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

export default Login;
