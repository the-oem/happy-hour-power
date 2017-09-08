import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import { Map } from './Map';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 39.750840,
          lng: -104.996529,
        },
        defaultAnimation: 2,
      }],
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('/api data: ', json)
      }).catch(e => {
        console.log('error: ', e)
      })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Happy Hour Power</h1>
          <Map
            containerElement={<div className="map-container"></div>}
            mapElement={<div className="map-element"></div>}
            onMapLoad={this.handleMapLoad}
            onMapClick={this.handleMapClick}
            markers={this.state.markers}
            onMarkerRightClick={this.handleMarkerRightClick}
          />
        </div>
      </div>
    );
  }
}
