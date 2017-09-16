import { connect } from 'react-redux';
import { geolocate, nearbyLocations, getLocations, handleMarkerClick, mapCenter } from '../actions';
import { Map } from '../components/Map';

const mapDispatchToProps = dispatch => {
  return {
    geolocate: () => dispatch(geolocate()),
    getLocations: () => dispatch(getLocations()),
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
