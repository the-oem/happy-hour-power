import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';

import RenderMap from './RenderMap';
import { Map } from './Map';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hour Power</h1>
      </header>
      <main>
        <div className="Map">
          <RenderMap />
        </div>
      </main>
    </div>
  );
}

export default App;
