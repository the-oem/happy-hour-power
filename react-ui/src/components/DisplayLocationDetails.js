import React from 'react';

export const DisplayLocationDetails = ({ location }) => {
  return (
    <div>
      <h3 className="loc-name">{location.name}</h3>
      <p className="loc-details">
        <b>Address:</b> {location.vicinity}
      </p>
    </div>
  );
};
