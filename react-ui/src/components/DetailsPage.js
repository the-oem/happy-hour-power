import React, { Component } from 'react';

export class DetailsPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('props in DetailsPage', this.props);
    return (
      <div>
        <h2>Details</h2>
      </div>
    );
  }
}
