import React, { Component } from 'react';
import "./App.css";

import Hello from './redux/Hello';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    )
  }
}

export default App
