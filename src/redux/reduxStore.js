import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  loginPage: loginReducer,
  profilePage: profileReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;