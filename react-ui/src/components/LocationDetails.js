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
    console.log(nextProps);
    const { name, vicinity } = nextProps.currentLocation;

    if (name && vicinity) {
      this.setState({ hidden: false })
    }
  }

  toggleHidden() {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    const status = this.state.hidden ? 'hidden' : 'shown';
    console.log(this.props);
    const { name, vicinity, inTable } = this.props.currentLocation;

    const link = inTable
      ? `/detail/${this.props.currentLocation.location.id}`
      : `/new-location`;

    return (
      <div className={`current-location ${status}`}>
        <div className='current-location__content'>
          <h3 className='current-location__name'>{name}</h3>
          <p className='current-location__address'>Address: {vicinity}</p>
        </div>
        <button
          className='current-location__close'
          onClick={this.toggleHidden}>
        </button>
        <Link
          to={link}
          className='current-location__show-details'>
        </Link>
      </div>
    );
  }
}
