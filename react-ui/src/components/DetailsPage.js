import React, { Component } from 'react';

export class DetailsPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name } = this.props.locationDetails.location;
    const happyHours = this.props.locationDetails.happyhours.map(hours => {
      const { timeslot, drink_specials, food_specials, id } = hours;

      const day = timeslot.slice(0, 3).toUpperCase();
      const beginTime = timeslot.slice(4, 9);
      const endTime = timeslot.slice(10, 15);
      const happyHourTimes = (
        <div>
          <p>{day}</p>
          <p>
            {beginTime} - {endTime}
          </p>
        </div>
      );

      return (
        <div key={id}>
          {happyHourTimes}
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
