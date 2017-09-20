import React, { Component } from 'react';

export class NewLocation extends Component {
  constructor(props) {
    super();
    this.state = {
      day: '',
      startingHour: '',
      endingHour: '',
      drinkSpecials: '',
      foodSpecials: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateInput(e, key) {
    this.setState({ [key]: e.target.value });
  }

  submitForm() {
    console.log(this.state);
  }

  render() {
    if (!this.props.activeLocation) {
      return <p>Not here yet</p>;
    }
    const { name, rating, vicinity } = this.props.activeLocation;

    return (
      <div>
        <h3>{name}</h3>
        <p>There are no happy hours listed for this location.</p>
        <p>Add Happy Hour Information</p>

        <label>Day</label>
        <select onChange={e => this.updateInput(e, 'day')}>
          <option>mon</option>
          <option>tue</option>
          <option>wed</option>
          <option>thu</option>
          <option>fri</option>
          <option>sat</option>
          <option>sun</option>
        </select>

        <label>Start Time</label>
        <select onChange={e => this.updateInput(e, 'startinghour')}>
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
        <select onChange={e => this.updateInput(e, 'endingHour')}>
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

        <p>Drink Specials</p>
        <textarea
          type="text"
          value={this.state.drinkSpecials}
          placeholder="Describe Drink Specials"
          onChange={e => this.updateInput(e, 'drinkSpecials')}
        />
        <p>Food Specials</p>
        <textarea
          type="text"
          value={this.state.foodSpecials}
          placeholder="Describe Food Specials"
          onChange={e => this.updateInput(e, 'foodSpecials')}
        />
        <button onClick={() => this.submitForm()}>Submit</button>
      </div>
    );
  }
}
