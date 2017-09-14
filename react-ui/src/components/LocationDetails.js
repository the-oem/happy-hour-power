import React, { Component } from 'react';
import '../styles/LocationDetails.css';

export default class LocationDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('props in LocationDetails: ', this.props.currentLocation);
    const location = this.props.currentLocation;

    return (
      <div className="current-location">
        <h3 className="loc-name">{location.name}</h3>
        <p className="loc-details">{location.vicinity}</p>
      </div>
    );
  }
}
