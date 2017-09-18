import React, { Component } from 'react';

export class DetailsPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name } = this.props.locationDetails.location;
    const happyHours = this.props.locationDetails.happyhours.map(hours => {
      const { timeslot, drink_specials, food_specials, locations_id } = hours;
      return (
        <div key={locations_id}>
          <p>{timeslot}</p>
          <p>{drink_specials}</p>
          <p>{food_specials}</p>
        </div>
      );
    });

    return (
      <div>
        <h3>{name}</h3>

        {happyHours}
      </div>
    );
  }
}
