import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './assets/css/index.scss';

// TODO: delete this block of code when build out app.
// This is only for testing if the proxy is working in
// development.
fetch('/api')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(error));

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
