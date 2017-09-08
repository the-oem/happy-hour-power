'https://maps.googleapis.com/maps/api/js?key=AIzaSyADBQeyhFP6WU0fBeSOkdGLS3q3MNL8I2E&callback=initMap'
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpcZgdVU2hk-E7sz2a-r-RKE4YkIDT0BI"

export const Map = withGoogleMap((props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      >
      </GoogleMap>
    </div>
  )
})







// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
// const GettingStartedGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map((marker, index) => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(index)}
//       />
//     ))}
//   </GoogleMap>
// ));
// // Then, render it:
// render(
//   <GettingStartedGoogleMap
//     containerElement={
//       <div style={{ height: `100%` }} />
//     }
//     mapElement={
//       <div style={{ height: `100%` }} />
//     }
//     onMapLoad={_.noop}
//     onMapClick={_.noop}
//     markers={markers}
//     onMarkerRightClick={_.noop}
//   />,
//   document.getElementById('root')
// );
