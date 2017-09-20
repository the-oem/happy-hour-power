import { connect } from 'react-redux';
import { NewLocation } from '../components/NewLocation';
import { addHappyHours, generateToken } from '../actions';

const mapStateToProps = state => {
  return {
    token: state.token,
    activeLocation: state.activeLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generateToken: () => {
      dispatch(generateToken());
    },
    addHappyHours: data => {
      dispatch(addHappyHours(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLocation);
