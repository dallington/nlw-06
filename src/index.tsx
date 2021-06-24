import React from 'react';
import ReactDOM from 'react-dom';

import './styles/reset.css';
import './styles/global.css';


import App from './App';


import './services/firebase'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
