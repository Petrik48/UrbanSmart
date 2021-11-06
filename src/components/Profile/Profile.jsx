import React from "react";
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <h1 className={styles.profileLogin}>
      {props.login}
    </h1>
  )
}

export default Profile;