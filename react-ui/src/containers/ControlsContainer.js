import { connect } from 'react-redux';
import Controls from '../components/Controls';
import toggleMapView from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    toggleMapView: view => dispatch(toggleMapView(view))
  };
};

const mapStateToProps = state => {
  return {
    view: state.toggleMapViewReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
