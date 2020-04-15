import React, { Component } from 'react'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleInput = (event) => {}

  handleRegister = () => {}

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
                onChange={() => {
                  //something goes here
                }}
              />
              <input
                type="password"
                maxLength="20"
                placeholder="Enter Password"
                name="password"
                onChange={() => {
                  //something goes here
                }}
              />
            </div>
            <button
              onClick={() => {
                //something goes here
              }}
              className="input-container-button"
            >
              Register
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Already have an account? login here: </span>
            {/* TODO Link to landing. className='input-container-button' */}
          </div>
        </div>
      </div>
    )
  }
}

export default Register
