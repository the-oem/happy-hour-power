import { connect } from 'react-redux';
import { geolocate, nearbyLocations, getLocations } from '../actions';
import { Map } from '../components/Map';

const mapDispatchToProps = dispatch => {
  return {
    geolocate: () => dispatch(geolocate()),
    nearbyLocations: (locations) => dispatch(nearbyLocations(locations)),
    getLocations: () => dispatch(getLocations()),
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    locations: state.locations,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
