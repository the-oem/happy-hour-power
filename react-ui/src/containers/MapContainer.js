import { connect } from 'react-redux';
import { Map } from '../components/Map';
import {
  geolocate,
  nearbyLocations,
  getLocations,
  handleMarkerClick,
  mapCenter
} from '../actions';


const mapDispatchToProps = dispatch => {
  return {
    geolocate: () => dispatch(geolocate()),
    getLocations: (googleMapsLocations) => dispatch(getLocations(googleMapsLocations)),
    nearbyLocations: (locations) => dispatch(nearbyLocations(locations)),
    handleMarkerClick: (position) => dispatch(handleMarkerClick(position)),
    mapCenter: (position) => dispatch(mapCenter(position))
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    locations: state.locations,
    activeLocation: state.activeLocation,
    center: state.center,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
