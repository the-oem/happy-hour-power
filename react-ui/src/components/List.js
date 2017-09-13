import React, { Component } from 'react';
import Location from './Location';

export class List extends Component {
  render() {
    const displayLocation = this.props.locations.map(location => (
      <Location key={location.id} {...location} />
    ));

    return <div>{displayLocation}</div>;
  }
}
