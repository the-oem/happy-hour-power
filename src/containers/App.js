import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import '../assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FlashMessages />
        <div className="App-header">
          <h1>Happy Hour Power</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
