import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer';
import LocationDetailsContainer from '../containers/LocationDetailsContainer';
import '../styles/LocationDetails.css';

export default class RenderMap extends Component {
  render() {
    return (
      <div className="map-area">
        <MapContainer map={this.props.map} />
        <LocationDetailsContainer
          currentLocation={this.props.currentLocation}
        />
      </div>
    );
  }
}
