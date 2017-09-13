import React from 'react';
import '../styles/List.css';

const Location = ({ name, vicinity, rating }) => {
  return (
    <div className="location">
      <h2 className="location-name">{name}</h2>
      <p>
        <b>Address:</b> {vicinity}
      </p>
      <p>
        <b>Rating:</b> {rating}
      </p>
    </div>
  );
};

export default Location;
