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
      aditionalText={<AditionalText
        text="Уже зарегистрированы?"
        linkTo="/Login"
        linkText="Войти"
      />}
    >
      <FormField
        label="Имя"
        type="text"
        name="name"
        value={values.name}
        error={errors.name}
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
