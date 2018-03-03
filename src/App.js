import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Window from './Window.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drag and Drop</h1>
        </header>
        <Window />
      </div>
    );
  }
}

export default App;
