import { connect } from 'react-redux';
import { NewLocation } from '../components/NewLocation';
import { addHappyHours } from '../actions';

const mapStateToProps = state => {
  return {
    newLocation: state.newLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addHappyHours: data => {
      dispatch(addHappyHours(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLocation);
