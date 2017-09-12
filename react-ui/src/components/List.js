import React, { Component } from 'react';

export class List extends Component {
  render() {
    const displayLocation = this.props.locations.map(location => (
      <Location key={location.id} {...location} />
      // console.log('location: ', location)
    ));

    return <div>{displayLocation}</div>;
  }
}

const Location = ({ name, vicinity }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Address: {vicinity}</p>
    </div>
  );
};
