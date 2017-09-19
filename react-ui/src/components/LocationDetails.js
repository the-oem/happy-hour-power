import React, { Component } from 'react';
import '../styles/LocationDetails.css';
import { Link } from 'react-router-dom';

export default class LocationDetails extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { name, vicinity } = nextProps.currentLocation;

    if (name && vicinity) {
      this.setState({ hidden: false })
    }
  }

  toggleHidden() {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    const { name, vicinity } = this.props.currentLocation;
    const { hidden } = this.state;

    const status = hidden ? 'hidden' : 'shown';

    return (
      <div className={`current-location ${status}`}>
        <div className="current-location__content">
          <h3 className='current-location__name'>{name}</h3>
          <p className='current-location__address'>Address: {vicinity}</p>
        </div>
        <button
          className='current-location__close'
          onClick={this.toggleHidden}>
        </button>
        <Link
          to='/detail'
          className='current-location__show-details'>
        </Link>
      </div>
    );
  }
}
