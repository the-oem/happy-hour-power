import React from 'react';
import '../styles/App.css';
import ControlsContainer from '../containers/ControlsContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Happy Hour Power</h1>
      </header>
      <main className="main-content">
        <div className="controls">
          <ControlsContainer />
        </div>
      </main>

      <footer>
        <h6 className="footer-text">Copyright 2017</h6>
      </footer>
    </div>
  );
};

export default App;
