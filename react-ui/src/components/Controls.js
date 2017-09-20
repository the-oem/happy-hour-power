import React, { Component } from 'react';
import RenderMapContainer from '../containers/RenderMapContainer';
import RenderList from './RenderList';
import DetailsPageContainer from '../containers/DetailsPageContainer';
import NewLocationContainer from '../containers/NewLocationContainer';
import '../styles/Controls.css';
import { Route } from 'react-router-dom';

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
    const buttonText = this.state.view === true ? 'LIST' : 'MAP';
    const buttonClasses =
      buttonText === 'LIST' ? 'toggle-btn btn-list' : 'toggle-btn btn-map';

    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <div className="controls-container">
                <p className="slogan">
                  Search for the best Happy Hour deals near you!
                </p>
                <button
                  className={buttonClasses}
                  onClick={() => this.toggleClass()}
                >
                  {buttonText}
                </button>
              </div>
              <div className="map-list-view">
                {!!this.state.view ? (
                  <RenderMapContainer {...props} />
                ) : (
                  <RenderList {...props} />
                )}
              </div>
            </div>
          )}
        />

        <Route exact path="/detail/:id" component={DetailsPageContainer} />
        <Route exact path="/new-location" component={NewLocationContainer} />
      </div>
    );
  }
}
