import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer';

export default class RenderMap extends Component {
  render() {
    return (
      <div className="map-area">
          <MapContainer
            map={this.props.map}
          />
      </div>
    );
  }
}
