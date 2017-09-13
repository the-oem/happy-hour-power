import React from 'react';
import ListContainer from '../containers/ListContainer';

const RenderList = props => {
  return (
    <div>
      <h2>Happy Hour Near You</h2>
      <ListContainer locations={props.locations} />
    </div>
  );
};

export default RenderList;
