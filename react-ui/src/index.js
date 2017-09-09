import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import rootReducer from './reducers';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
