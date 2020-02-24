import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './component/Routes';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <div className="App">
      <Routes/>
    </div>
  </Router>,
  // <App />,
  document.getElementById('root')
);