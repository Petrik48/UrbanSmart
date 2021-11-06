const SET_LOGIN = 'SET_LOGIN';

let initiateState = {
  login: null
}

const loginReducer = (state = initiateState, action) => {
  switch (action.type) {

    case SET_LOGIN: {
      return {
        ...state,
        login: action.login
      }
    }

    default:
      return state
  }
}

export const setLogin = (login) => {
  return ({
    type: SET_LOGIN,
    login
  })
}

export default loginReducer;