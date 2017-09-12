import React from 'react';

const Location = ({ name, vicinity, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{vicinity}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Location;
