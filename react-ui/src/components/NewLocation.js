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
  }

  updateInput(e, key) {
    this.setState({ [key]: e.target.value });
  }

  submitForm() {}

  render() {
    const { name } = this.props.locationDetails.location;

    // const times = () => {
    //
    //   const horas = () => {
    //     for(let i=1;i<9; i++) {
    //       return `<option>0${i}:00<option>`
    //     }
    //   }
    //
    // console.log(horas())
    //   return(
    //     <select>{horas()}</select>
    //   )
    // }

    return (
      <div>
        <h3>{name}</h3>
        <p>There are no happy hours listed for this location.</p>
        <p>Add Happy Hour Information</p>

        <label>Day</label>
        <select>
          <option>mon</option>
          <option>tue</option>
          <option>wed</option>
          <option>thu</option>
          <option>fri</option>
          <option>sat</option>
          <option>sun</option>
        </select>

        <label>Start Time</label>
        <select>{times()}</select>
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
