import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navigation/>
      <h1>Todo</h1>
      </div>
    );
  }
}

export default App;
