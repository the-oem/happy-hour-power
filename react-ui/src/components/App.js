import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import { Map } from './Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    // fetch('/api')
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log('/api data: ', json)
    //   }).catch(e => {
    //     console.log('error: ', e)
    //   })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Happy Hour Power</h1>
          <Map
            containerElement={<div className="map-container"></div>}
            mapElement={<div className="map-element"></div>}
          />
        </div>
      </div>
    );
  }
}

export default App;
