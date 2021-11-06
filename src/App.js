import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <Route path='/' render={()=> <LoginContainer />}/>
      <Route path='/profile' render={()=> <ProfileContainer />}/>
    </BrowserRouter>
  );
}

export default App;
