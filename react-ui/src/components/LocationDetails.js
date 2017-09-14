import React, { Component } from 'react';

export default class LocationDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('props in LocationDetails: ', this.props.currentLocation);
    const location = this.props.currentLocation;

    return (
      <div>
        <h2>{location.name}</h2>
        <p>{location.vicinity}</p>
        <p>{location.rating}</p>
      </div>
    );
  }
}
