import React, { Component} from 'react';
import './App.css';
import Game from '../src/components/Game'

/*
lodash
mathjs
date-fns
collectjs
chancejs
chartjs
immutable
*/

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Play</h1>
      <Game/>
      </div>
    );
  }
}

export default App;
