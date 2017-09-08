import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const currentLocation = {
  lat: 39.750840,
  lng: -104.996529,
}

export const Map = withGoogleMap((props) => {
  const markers = props.markers.map((marker) => (
    <Marker {...marker}/>
  ));
  const { lat, lng } = currentLocation;


  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={12}
      defaultCenter={{ lat, lng }}
      onClick={props.onMapClick}
    >
      {markers}
    </GoogleMap>
  )
})

// export class Map extends Component {
//   constructor() {
//     super();
//     this.state = initialState;
//   }
//
//   render() {
//     return withGoogleMap((props) => {
//
//
//       return (
//         <div>
//
//         </div>
//       );
//     });
//   }
// }
