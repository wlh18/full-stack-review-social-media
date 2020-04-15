import React from 'react'
import AuthHeader from './Components/AuthHeader'
import Profile from './Components/Profile'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <AuthHeader />
      <Profile />
    </div>
  )
}

export default App
