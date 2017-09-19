import { connect } from 'react-redux';
import { NewLocation } from '../components/NewLocation';
import { addHappyHours } from '../actions';

const mapStateToProps = state => {
  return {
    activeLocation: state.activeLocation
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
