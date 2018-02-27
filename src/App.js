import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world</h1>
        </header>
        <p className="App-intro">
          Trong một số trường hợp ta có thể thay thế cái này.
        </p>
      </div>
    );
  }
}

export default App;
