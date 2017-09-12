import React from 'react';
import '../styles/App.css';
import RenderMapContainer from '../containers/RenderMapContainer';
import RenderList from './RenderList';

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
        <div className="List">
          <RenderList />
        </div>
      </main>
    </div>
  );
};

export default App;
