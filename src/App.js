import React, { Component} from 'react';
import './App.css';
// import Game from '../src/components/Game'
// import Navigation from './components/Navigation';
// import ThreeJsScene from './components/ThreeJsScene';
// import PhoneScene from './components/PhoneScene';
import FocusedForm from './components/Focusable'

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
      <h1>Form Stuff</h1>
      <FocusedForm/>
      </div>
    );
  }
}

export default App;
