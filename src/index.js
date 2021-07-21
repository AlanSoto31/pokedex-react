import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes'

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
