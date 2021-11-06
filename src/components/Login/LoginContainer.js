import React from "react";
import Login from "./Login";
import {auth, turnOnButton, updateLoginBody, updatePasswordBody} from "../../redux/loginReducer";
import {connect} from "react-redux";
import {setLogin} from "../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    loginInputBody: state.loginPage.newLoginBody,
    passwordInputBody: state.loginPage.newPasswordBody,
    isAuth: state.loginPage.isAuth,
    buttonDisabled: state.loginPage.buttonDisabled
  }
}

export default connect(mapStateToProps, {
  updateLoginBody, updatePasswordBody, auth, turnOnButton, setLogin
})(Login);