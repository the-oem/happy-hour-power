import React, { Component } from 'react';
import { DisplayLocationDetails } from './DisplayLocationDetails';
import '../styles/LocationDetails.css';

export default class LocationDetails extends Component {
  constructor(props) {
    super();
  }

  renderDetails() {
    return this.props.currentLocation && this.props.currentLocation.name ? (
      <DisplayLocationDetails location={this.props.currentLocation} />
    ) : (
      <div className="display-none" />
    );
  }

  render() {
    return <div className="current-location">{this.renderDetails()}</div>;
  }
}
