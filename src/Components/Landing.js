import React, { Component } from 'react'

//TODO Write all methods, connect to store, connect methods to JSX
class Landing extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
    //this.handleLogin = this.handleLogin.bind(this)
  }

  handleInput = () => {}

  handleLogin = () => {}

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
              Log in
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Don't have an account? Register here: </span>
            {/* TODO Link to register page. className='input-container-button'  */}
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
