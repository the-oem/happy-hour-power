import React, { Component } from 'react';
import '../styles/LocationDetails.css';

export default class LocationDetails extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    const { name, vicinity } = this.props.currentLocation;
    const { hidden } = this.state;

    // need to refactor
    const status = name ? 'shown' : 'hidden';

    return (
      <div className={`current-location ${status}`}>
        <h3 className='loc-name'>{name}</h3>
        <p className='loc-details'>
          <b>Address:</b> {vicinity}
        </p>
        <button
          className="show-details"
          onClick={this.showDetails}>

        </button>
        <button
          className='current-location-toggle'
          onClick={this.toggleHidden}
          >
          { hidden ? 'Show' : 'Hide' }
        </button>
      </div>
    );
  }
}
