import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { DEFAULT_LOCATION } from '../utils/constants';

const BaseMap = withGoogleMap((props) => {
  const markers = props.markers.map((marker) => (
    <Marker {...marker}/>
  ));

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={DEFAULT_LOCATION.coordinates}
      onClick={props.onMapClick}
    >
      {markers}
    </GoogleMap>
  )
})

export class Map extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
    };
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleMapLoad(googleMap) {
    if (!this.gmap) {
      return;
    }

    const { map } = this.gmap.state;
    const request = {
      location: new window.google.maps.LatLng(39.750840,-104.996529),
      radius: '500',
      type: ['restaurant'],
    }

    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        const markers = results.map(place => {
          const { location } = place.geometry;
          return {
            position: {
              lat: location.lat(),
              lng: location.lng(),
            },
            defaultAnimation: 2,
          }
        })

        this.setState({ markers })
      }
    });
  }

  render() {
    return (
      <BaseMap
        ref={googleMap => this.gmap = googleMap}
        containerElement={<div className="map-container"/>}
        mapElement={<div className="map-element"/>}
        onMapLoad={this.handleMapLoad}
        markers={this.state.markers}
        onMapClick={this.handleMapClick}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}