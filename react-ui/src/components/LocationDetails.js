import React, { Component } from 'react';

export default class LocationDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('props in LocationDetails: ', this.props);
    return <div>Hello</div>;
  }
}
