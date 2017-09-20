import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { DEFAULT_LOCATION } from '../utils/constants';

const BaseMap = withGoogleMap(props => {
  const active = id => {
    return id === props.activeLocation.id ? 1.0 : 0.65;
  };

  const markers = props.locations.map(location => (
    <Marker
      {...location.marker}
      key={location.id}
      opacity={active(location.id)}
      onClick={() => props.handleMarkerClick(location)}
    />
  ));

  const currentLocation = props.currentLocation.lat ? (
    <Marker
      position={props.currentLocation}
      defaultAnimation="3"
      icon={{
        url: 'assets/current-location.png',
        scaledSize: new window.google.maps.Size(75, 75)
      }}
    />
  ) : (
    ''
  );

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={DEFAULT_LOCATION.coordinates}
      center={props.center || DEFAULT_LOCATION.coordinates}
      onIdle={props.onIdle}
    >
      {currentLocation}
      {markers}
    </GoogleMap>
  );
});

export class Map extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.onIdle = this.onIdle.bind(this);
  }

  handleMapLoad(googleMap) {
    if (!this.gmap) return;

    this.nearbySearch();
  }

  nearbySearch() {
    const { map } = this.gmap.state;
    const { center } = this.props;
    const location =
      center.lat && center.lng
        ? center
        : new window.google.maps.LatLng(
            DEFAULT_LOCATION.coordinates.lat,
            DEFAULT_LOCATION.coordinates.lng
          );

    const request = {
      location,
      radius: '500',
      type: ['bar'],
      openNow: true
    };

    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        this.props.getLocations(results);
      }
    });
  }

  onIdle() {
    const { center } = this.gmap.state.map;

    this.props.mapCenter(center);
    this.nearbySearch();
  }

  componentDidMount() {
    this.props.geolocate();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  render() {
    const { center } = this.props;

    // TODO: THIS CODE IS DUPLICATED: WILL NEED TO REFACTOR

    const location =
      center.lat && center.lng
        ? center
        : new window.google.maps.LatLng(
            DEFAULT_LOCATION.coordinates.lat,
            DEFAULT_LOCATION.coordinates.lng
          );

    return (
      <BaseMap
        ref={googleMap => (this.gmap = googleMap)}
        containerElement={<div className="map-container" />}
        mapElement={<div className="map-element" />}
        onMapLoad={this.handleMapLoad}
        handleMarkerClick={this.props.handleMarkerClick}
        locations={this.props.locations}
        currentLocation={this.props.currentLocation}
        activeLocation={this.props.activeLocation}
        onIdle={this.onIdle}
        center={location}
      />
    );
  }
}
