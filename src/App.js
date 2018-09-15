import React, { Component} from 'react';
import './App.css';
// import Game from '../src/components/Game'
// import Navigation from './components/Navigation';
// import ThreeJsScene from './components/ThreeJsScene';
import PhoneScene from './components/PhoneScene';

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
      <h1>Three.js Scene</h1>
      <PhoneScene height="800" width="600"/>
      </div>
    );
  }
}

export default App;
