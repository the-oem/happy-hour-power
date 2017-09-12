import { connect } from 'react-redux';
import { List } from '../components/List';
import { listLocations } from '../actions';

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayLocation: data => {
      dispatch(listLocations(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
