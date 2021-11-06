import React from "react";
import styles from './login.module.css';
import {turnOnButton} from "../../redux/loginReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
  const loginInput = React.createRef();
  const passwordInput = React.createRef();

  const loginInputChange = () => {
    props.updateLoginBody(loginInput.current.value)
  }

  const passwordInputChange = () => {
    props.updatePasswordBody(passwordInput.current.value)
  }

  React.useEffect(() => {
    props.turnOnButton(props.loginInputBody, props.passwordInputBody);
  }, [props.loginInputBody, props.passwordInputBody])

  if (props.isAuth) {
    props.setLogin(props.loginInputBody);
    return <Redirect to='/profile' />;
  }

  return (
    <form className={styles.form}>
      <input ref={loginInput} type="text" placeholder='Введите логин' value={props.loginInputBody} onChange={loginInputChange} />
      <input ref={passwordInput} type="password" placeholder='Введите пароль' value={props.passwordInputBody}
             onChange={passwordInputChange} />
      <button disabled={props.buttonDisabled} onClick={(event) => {
        event.preventDefault();
        props.auth();
      }}>
        Войти
      </button>
    </form>
  )
}

export default Login;
