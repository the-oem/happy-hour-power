import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = [thunk];
const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(...middleware),)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
