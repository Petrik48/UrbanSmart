import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
  return {
    login: state.profilePage.login,
  }
}

export default connect(mapStateToProps, {

})(Profile);