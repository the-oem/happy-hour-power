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
    </div>
  );
};

export default App;
