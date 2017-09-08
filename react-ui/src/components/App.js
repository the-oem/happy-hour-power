
import React from 'react';
import '../styles/App.css';

import { Map } from './Map';
import RenderMapContainer from '../containers/RenderMapContainer';

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