import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/reducer";
import axios from "axios";

const Profile = props => {
  // console.log(props)

  const logout = () => {
    axios
      .post("/api/logout")
      .then(res => {
        props.logout();
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={"app-body"}>
      <div className="dashboard-input">
        <p>{props.user.user_id}</p>
        <p>{props.user.user_email}</p>
        <button className="input-container-button" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, { logout })(Profile);
