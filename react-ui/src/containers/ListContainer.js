import { connect } from 'react-redux';
import { List } from '../components/List';

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps, null)(List);
