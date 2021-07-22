import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
