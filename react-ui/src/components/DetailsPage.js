import React, { Component } from 'react';
import '../styles/DetailsPage.css';

export class DetailsPage extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchDetail(id);
  }

  render() {
    if (!this.props.locationDetails.location) {
      return <p>Loader</p>;
    }

    const hours = this.props.locationDetails.location.data[0];
    const location = this.props.locationDetails.location.data[1];
    const { name } = location;

    const happyHours = hours.map(hours => {
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
