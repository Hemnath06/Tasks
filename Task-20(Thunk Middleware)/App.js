import React, { Component } from 'react';
import "./App.css";
import Welcome from './reactRedux/Welcome';
import Hello from './redux/Hello';
import store from './store';
import { Provider } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Welcome />
      </div>
      </Provider>
    )
  }
}

export default App
