import React, { Component } from 'react';

export class List extends Component {
  render() {
    const displayLocation = this.props.locations.map(location => (
      <Location {...location} />
    ));

    return <div>{displayLocation}</div>;
  }
}

const Location = ({ name }) => {
  return <div>{name}</div>;
};
