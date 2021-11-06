import {LoginAPI} from "../api/api";

const UPDATE_LOGIN_BODY = 'UPDATE_LOGIN_BODY';
const UPDATE_PASSWORD_BODY = 'UPDATE_PASSWORD_BODY';
const AUTH = 'AUTH';
const UNLOCK_BUTTON = 'UNLOCK_BUTTON';

let initiateState = {
  newLoginBody: '',
  newPasswordBody: '',
  isAuth: false,
  buttonDisabled: true,
}

const loginReducer = (state = initiateState, action) => {
  switch (action.type) {

    case UPDATE_LOGIN_BODY: {
      return {
        ...state,
        newLoginBody: action.newLoginBody
      }
    }
    case UPDATE_PASSWORD_BODY: {
      return {
        ...state,
        newPasswordBody: action.newPasswordBody
      }
    }

    case UNLOCK_BUTTON: {
      return {
        ...state,
        buttonDisabled: action.state
      }
    }

    case AUTH: {
      return {
        ...state,
        isAuth: true,
      }
    }

    default:
      return state
  }
}

export const turnOnButton = (login, password) => {
  return (dispatch) => {
    dispatch(changeButtonState(!LoginAPI.login(login, password)))
  }
}

export const changeButtonState = (state) => {
  return ({
    type: UNLOCK_BUTTON,
    state
  })
}

export const auth = () => {
  return ({
    type: AUTH
  })
}

export const updateLoginBody = (newLoginBody) => {
  return ({
    type: UPDATE_LOGIN_BODY,
    newLoginBody
  })
}

export const updatePasswordBody = (newPasswordBody) => {
  return ({
    type: UPDATE_PASSWORD_BODY,
    newPasswordBody
  })
}
export default loginReducer;