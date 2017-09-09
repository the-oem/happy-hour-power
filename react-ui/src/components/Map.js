import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const defaultLocation = {
  lat: 39.750840,
  lng: -104.996529,
}

const BaseMap = withGoogleMap((props) => {
  const markers = props.markers.map((marker) => (
    <Marker {...marker}/>
  ));
  const { lat, lng } = defaultLocation;
  console.log(window.google.maps.places);

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

export class Map extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleMapLoad(reference) {
    this.map = reference;
  }

  render() {
    return (
      <BaseMap
        containerElement={<div className="map-container"/>}
        mapElement={<div className="map-element"/>}
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={[]}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}


// const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDpcZgdVU2hk-E7sz2a-r-RKE4YkIDT0BI";

// export class Map extends Component {
//   render() {
//     const markers = this.props.markers.map((marker) => (
//       <Marker {...marker}/>
//     ));
//     const { lat, lng } = defaultLocation;
//     return (
//       <GoogleMap
//         ref={this.props.onMapLoad}
//         googleMapURL={googleMapURL}
//         defaultZoom={12}
//         defaultCenter={{ lat, lng }}
//         onClick={this.props.onMapClick}
//       >
//         {markers}
//       </GoogleMap>
//     )
//   }
// }



// export class Map extends Component {
//   render() {
//     return withGoogleMap((props) => {
//         const markers = props.markers.map((marker) => (
//           <Marker {...marker}/>
//         ));
//         const { lat, lng } = defaultLocation;
//
//         return (
//           <div>
//             <GoogleMap
//               ref={props.onMapLoad}
//               defaultZoom={12}
//               defaultCenter={{ lat, lng }}
//               onClick={props.onMapClick}
//               >
//                 {markers}
//               </GoogleMap>
//           </div>
//         )
//     })
//   }
// }


  var INITIAL_LOCATION = {
    address: 'Turing',
    position: {
      latitude: 39.750840,
      longitude: -104.996529
    }
  };

  var INITIAL_MAP_ZOOM_LEVEL = 8;

  var ATLANTIC_OCEAN = {
    latitude: 29.532804,
    longitude: -55.491477
  };

  // export class Map extends Component {
  //   constructor(){
  //     super();
  //     this.state = {
  //       isGeocodingError: false,
  //       foundAddress: INITIAL_LOCATION.address,
  //     }
  //     this.googleMaps = window.google.maps;
  //     this.setMapElementReference = this.setMapElementReference.bind(this)
  //     this.geocodeAddress = this.geocodeAddress.bind(this)
  //   }
  //
  //   geocodeAddress(address) {
  //     this.geocoder.geocode({ address }, (results, status) => {
  //       if (status === window.google.maps.GeocoderStatus.OK) {
  //         this.setState({
  //           foundAddress: results[0].formatted_address,
  //           isGeocodingError: false
  //         })
  //
  //         this.map.setCenter(results[0].geometry.location)
  //         this.marker.setPosition(results[0].geometry.location)
  //       } else {
  //         this.setState({
  //           foundAddress: null,
  //           isGeocodingError: true,
  //         })
  //
  //         this.map.setCenter({
  //           lat: INITIAL_LOCATION.position.latitude,
  //           lng: INITIAL_LOCATION.position.longitude,
  //         })
  //
  //         this.map.setPosition({
  //           lat: INITIAL_LOCATION.position.latitude,
  //           lng: INITIAL_LOCATION.position.longitude,
  //         })
  //       }
  //     })
  //   }
  //
  //   handleFormSubmit(submitEvent) {
  //     submitEvent.preventDefault();
  //
  //     this.geocodeAddress(this.searchInputElement.value);
  //   }
  //
  //   componentDidMount() {
  //     this.map = new window.google.maps.Map(this.state.mapElement, {
  //       zoom: 5,
  //       center: {
  //         lat: INITIAL_LOCATION.position.latitude,
  //         lng: INITIAL_LOCATION.position.longitude,
  //       }
  //     })
  //
  //     this.marker = new window.google.maps.Marker({
  //       map: this.map,
  //       POSITION: {
  //         lat: INITIAL_LOCATION.position.latitude,
  //         lng: INITIAL_LOCATION.position.longitude,
  //       }
  //     })
  //
  //     this.geocoder = new window.google.maps.Geocoder();
  //   }
  //
  //   setMapElementReference(mapElementReference) {
  //     this.state.mapElement = mapElementReference;
  //   }
  //
  //   render() {
  //     return (
  //       <div className="map" ref={this.setMapElementReference}></div>
  //     )
  //   }
  // }
  //
  // export const Map = React.createClass({
  //   getInitialState: function () {
  //     return {
  //       isGeocodingError: false,
  //       foundAddress: INITIAL_LOCATION.address
  //     };
  //   },
  //
  //   geocodeAddress: function (address) {
  //     this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
  //
  //       if (status === window.google.maps.GeocoderStatus.OK) {
  //
  //         this.setState({
  //           foundAddress: results[0].formatted_address,
  //           isGeocodingError: false
  //         });
  //
  //         this.map.setCenter(results[0].geometry.location);
  //         this.marker.setPosition(results[0].geometry.location);
  //
  //         return;
  //       }
  //
  //       this.setState({
  //         foundAddress: null,
  //         isGeocodingError: true
  //       });
  //
  //       this.map.setCenter({
  //         lat: ATLANTIC_OCEAN.latitude,
  //         lng: ATLANTIC_OCEAN.longitude
  //       });
  //
  //       this.marker.setPosition({
  //         lat: ATLANTIC_OCEAN.latitude,
  //         lng: ATLANTIC_OCEAN.longitude
  //       });
  //
  //     }.bind(this));
  //   },
  //
  //   handleFormSubmit: function (submitEvent) {
  //     submitEvent.preventDefault();
  //
  //     var address = this.searchInputElement.value;
  //
  //     this.geocodeAddress(address);
  //   },
  //
  //   componentDidMount: function () {
  //     var mapElement = this.mapElement;
  //
  //     this.map = new window.google.maps.Map(mapElement, {
  //       zoom: INITIAL_MAP_ZOOM_LEVEL,
  //       center: {
  //         lat: INITIAL_LOCATION.position.latitude,
  //         lng: INITIAL_LOCATION.position.longitude
  //       }
  //     });
  //
  //     this.marker = new window.google.maps.Marker({
  //       map: this.map,
  //       position: {
  //         lat: INITIAL_LOCATION.position.latitude,
  //         lng: INITIAL_LOCATION.position.longitude
  //       }
  //     });
  //
  //     this.geocoder = new window.google.maps.Geocoder();
  //   },
  //
  //   setSearchInputElementReference: function (inputReference) {
  //     this.searchInputElement = inputReference;
  //   },
  //
  //   setMapElementReference: function (mapElementReference) {
  //     this.mapElement = mapElementReference;
  //   },
  //
  //   render: function () {
  //     return (
  //       <div className="container">
  //
  //         <div className="row">
  //           <div className="col-sm-12">
  //
  //             <form className="form-inline" onSubmit={this.handleFormSubmit}>
  //               <div className="row">
  //                 <div className="col-xs-8 col-sm-10">
  //
  //                   <div className="form-group">
  //                     <label className="sr-only" htmlFor="address">Address</label>
  //                     <input type="text" className="form-control input-lg" id="address" placeholder="London, United Kingdom" ref={this.setSearchInputElementReference} required />
  //                   </div>
  //
  //                 </div>
  //                 <div className="col-xs-4 col-sm-2">
  //
  //                   <button type="submit" className="btn btn-default btn-lg">
  //                     <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
  //                   </button>
  //
  //                 </div>
  //               </div>
  //             </form>
  //
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-sm-12">
  //
  //             {this.state.isGeocodingError ? <p className="bg-danger">Address not found.</p> : <p className="bg-info">{this.state.foundAddress}</p>}
  //
  //             <div className="map" ref={this.setMapElementReference}></div>
  //
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // });
