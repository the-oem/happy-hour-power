import { connect } from 'react-redux';
import { geolocate } from '../actions';
import { Map } from '../components/Map';

const mapDispatchToProps = (dispatch) => {
  return {
    geolocate: () => dispatch(geolocate())
  }
}

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
