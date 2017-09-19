import React from 'react';
import '../styles/List.css';

const Location = ({ name, vicinity, rating }) => {
  return (
    <div className="location">
      <div className="location-container">
        <h2 className="location-name">{name}</h2>
        <p>
          <b>Address:</b> {vicinity}
        </p>
        <p>
          <b>Rating:</b> {rating}
        </p>
      </div>
      <img
        className="see-more-icon"
        src={require('../../public/assets/right-arrow-light.svg')}
        alt="link to see more details"
      />
    </div>
  );
};

export default Location;
