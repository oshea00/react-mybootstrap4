import React from 'react';
import ReactDOM from 'react-dom';
import './include/bootstrap'
import App from '../src/App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
