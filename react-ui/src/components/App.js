import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';

import RenderMapContainer from '../containers/RenderMapContainer';
import { Map } from './Map';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hour Power</h1>
      </header>
      <main>
        <div className="Map">
          <RenderMapContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
