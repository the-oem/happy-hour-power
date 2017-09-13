import React, { Component } from 'react';
import RenderMapContainer from '../containers/RenderMapContainer';
import RenderList from './RenderList';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      view: true
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(props) {
    const newView = !this.state.view;
    this.setState({ view: newView });
  }

  render() {
    const display =
      this.state.view === true ? <RenderMapContainer /> : <RenderList />;
    const buttonText = this.state.view === true ? 'Map' : 'List';

    return (
      <div>
        <button onClick={() => this.toggleClass()}>{buttonText}</button>

        <div>{display}</div>
      </div>
    );
  }
}
