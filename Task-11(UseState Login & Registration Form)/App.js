import React, { Component } from 'react'
import "./App.css";

import Login from './UseState/Login.js';


export class App1 extends Component {
  componentDidMount(){
    document.title="Login & SignUp (UseState)"
  }
  render() {
    return (
      <>
         
         <Login />
      </>
    )
  }
}

export default App1
