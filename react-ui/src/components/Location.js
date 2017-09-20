import React from 'react';
import '../styles/List.css';
import { Link } from 'react-router-dom'

const Location = props => {
  const link = props.inTable
    ? `/detail/${props.location.id}`
    : `/new-location`;


  return (
    <div className="location">
      <div className="location-container">
        <h2 className="location-name">{props.name}</h2>
        <p>
          <b>Address:</b> {props.vicinity}
        </p>
        <p>
          <b>Rating:</b> {props.rating}
        </p>
      </div>
      <Link
        to={link}
        className="see-more-icon"
      >
      </Link>
    </div>
  );
};

export default Location;
