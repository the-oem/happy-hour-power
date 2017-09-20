import React, { Component } from 'react';
import { DAYS_OF_WEEK } from '../utils/constants';
import '../styles/NewLocation.css';
import Location from '../model/Location';
import HappyHour from '../model/HappyHour';

const initialState = {
  inputs: {
    day: '',
    startingHour: '',
    endingHour: '',
    drinkSpecials: '',
    foodSpecials: ''
  },
  uploaded: ''
};

export class NewLocation extends Component {
  constructor(props) {
    super();
    this.state = initialState;
    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateInput(e, key) {
    this.setState({
      inputs: Object.assign({}, this.state.inputs, { [key]: e.target.value })
    });
  }

  submitForm() {
    const { activeLocation } = this.props;

    const location = new Location(
      this.props.activeLocation,
      'website',
      'phone_number',
      2
    );

    this.postRequest('api/v1/locations', location).then(locationResponse => {
      const location = locationResponse.data[0];
      const happyHourInput = new HappyHour(location.id, this.state.inputs);
      return this.postRequest(
        'api/v1/happyhours',
        happyHourInput
      ).then(happyHourResponse => {
        this.setState(
          Object.assign({}, initialState, { uploaded: location.name })
        );
        this.resetLocation();
      });
    });
  }

  postRequest(endpoint, content) {
    const { token } = this.props;
    const body = Object.assign(content, token);

    return fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  componentDidMount() {
    this.props.generateToken();
  }

  resetLocation() {
    setTimeout(() => {
      this.setState({ uploaded: '' });
    }, 5000);
  }

  render() {
    if (!this.props.activeLocation) {
      return <p>Not here yet</p>;
    }
    const { name, rating, vicinity } = this.props.activeLocation;

    const disabled =
      Object.keys(this.state.inputs).findIndex(
        key => this.state.inputs[key].length < 1
      ) >= 0;

    return (
      <div className="details-page-container">
        <p
          className={`location-uploaded ${this.state.uploaded !== ''
            ? 'active'
            : ''}`}
        >
          {this.state.uploaded} was uploaded.
        </p>
        <h3 className="google-location-name">{name}</h3>
        <p className="info">
          There are no happy hours listed for this location.
        </p>
        <p className="add">Add Happy Hour Information</p>

        <div className="form">
          <div className="form-piece">
            <p className="day-name">Day</p>
            <select className="day" onChange={e => this.updateInput(e, 'day')}>
              <option>Day of the Week</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
          </div>

          <div className="times form-piece">
            <label>Start Time</label>
            <select
              className="start"
              onChange={e => this.updateInput(e, 'startingHour')}
            >
              <option>-- Start Time --</option>
              <option>01:00</option>
              <option>02:00</option>
              <option>03:00</option>
              <option>04:00</option>
              <option>05:00</option>
              <option>06:00</option>
              <option>07:00</option>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
              <option>24:00</option>
            </select>

            <label>End Time</label>
            <select
              className="end"
              onChange={e => this.updateInput(e, 'endingHour')}
            >
              <option>-- End Time --</option>
              <option>01:00</option>
              <option>02:00</option>
              <option>03:00</option>
              <option>04:00</option>
              <option>05:00</option>
              <option>06:00</option>
              <option>07:00</option>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
              <option>24:00</option>
            </select>
          </div>

          <div className="form-piece drink">
            <p>Drink Specials</p>
            <textarea
              className="drink-specials"
              type="text"
              value={this.state.drinkSpecials}
              placeholder="Describe Drink Specials"
              onChange={e => this.updateInput(e, 'drinkSpecials')}
            />
          </div>

          <div className="form-piece">
            <p>Food Specials</p>
            <textarea
              className="food-specials"
              type="text"
              value={this.state.foodSpecials}
              placeholder="Describe Food Specials"
              onChange={e => this.updateInput(e, 'foodSpecials')}
            />
          </div>
          <button
            className="submit-hours"
            onClick={() => this.submitForm()}
            disabled={disabled}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
