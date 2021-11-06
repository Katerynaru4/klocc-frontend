import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App.jsx';
import AppContext from './AppContext.jsx';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('root')
);
