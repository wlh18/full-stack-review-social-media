import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import axios from "axios";
import { toast } from "react-toastify";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegister = () => {
    const { email, password } = this.state;
    axios
      .post("/api/register", { email, password })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dash");
      })
      //#err.response.status is the status code
      .catch(err => {
        if (err.response.status === 400) {
          console.log("hit");
          toast.error(
            <div style={{ backgroundColor: "#e65847" }}>
              User already exists
            </div>
          );
        }
      });
  };

  render() {
    return (
      <div className="app-body">
        <div className="input-container">
          <p className="above-input">Already have an account? Login here: </p>
          <div className="flex-horizontal inputs">
            <div className="flex-vertical">
              <input
                maxLength="100"
                placeholder="Enter Email"
                name="email"
                onChange={event => this.handleInput(event)}
              />
              <input
                type="password"
                maxLength="20"
                placeholder="Enter Password"
                name="password"
                onChange={event => this.handleInput(event)}
              />
            </div>
            <button
              onClick={this.handleRegister}
              className="input-container-button"
            >
              Register
            </button>
          </div>
          <div className="flex-horizontal link">
            <Link to="/" className="input-container-button">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getUser })(Register);
