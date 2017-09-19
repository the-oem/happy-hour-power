import { connect } from 'react-redux';
import { DetailsPage } from '../components/DetailsPage';
import { handleMarkerClick } from '../actions';

const mapStateToProps = state => {
  return {
    locationDetails: state.details
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showDetails: data => {
      dispatch(handleMarkerClick(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
