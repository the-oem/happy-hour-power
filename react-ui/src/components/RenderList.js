import React from 'react';
import ListContainer from '../containers/ListContainer';
import '../styles/List.css';

const RenderList = props => {
  return (
    <div className="list">
      <h2 className="location-header">Happy Hour Locations Near You</h2>
      <ListContainer locations={props.locations} />
    </div>
  );
};

export default RenderList;
