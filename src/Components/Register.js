import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = event => {

  };

  handleRegister = () => {
   
  };

  render() {
    return (
      <div className="app-body">
        <div className="input-container">
          <div className="flex-horizontal inputs">
            <div className="flex-vertical">
              <input
                maxLength="100"
                placeholder="Enter Email"
                name="email"
                onChange={
                  //something goes here
                }
              />
              <input
                type="password"
                maxLength="20"
                placeholder="Enter Password"
                name="password"
                onChange={
                  //something goes here
                }
              />
            </div>
            <button
              onClick={
                //something goes here
              }
              className="input-container-button"
            >
              Register
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Already have an account? login here: </span>
            <Link to="/" className="input-container-button">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
