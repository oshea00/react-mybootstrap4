import React, { Component} from 'react';
import './App.css';
// import Game from '../src/components/Game'
// import Navigation from './components/Navigation';
// import ThreeJsScene from './components/ThreeJsScene';
// import PhoneScene from './components/PhoneScene';
// import FocusedForm from './components/Focusable'
import Treechart, {DomTree} from './components/Treechart'

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
      <Treechart 
        height="300" 
        width="800" 
        title="Fig 1 - Introspecting the DOM." 
        data={DomTree}
        dataId="body"
        maxDepth="10"/>
      </div>
    );
  }
}

export default App;
