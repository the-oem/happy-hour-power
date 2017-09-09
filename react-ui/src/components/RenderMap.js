import React, { Component } from 'react';
import '../styles/App.css';

import { Map } from './Map';

export default class RenderMap extends Component {
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
      <div className="map-area">
          <Map
            map={this.props.map}
    
            containerElement={<div className="map-container"/>}
            mapElement={<div className="map-element"/>}
            onMapLoad={this.handleMapLoad}
            onMapClick={this.handleMapClick}
            markers={this.state.markers}
            onMarkerRightClick={this.handleMarkerRightClick}
          />
      </div>
    );
  }
}
