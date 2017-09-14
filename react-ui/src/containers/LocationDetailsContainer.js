import { connect } from 'react-redux';
import LocationDetails from '../components/LocationDetails';
import handleMarkerClick from '../actions';

const mapStateToProps = state => {
  return {
    currentLocation: state.activeLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayDetails: data => {
      dispatch(handleMarkerClick(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
