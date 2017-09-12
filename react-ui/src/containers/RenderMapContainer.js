import { connect } from 'react-redux';
import { renderMap } from '../actions';
import RenderMap from '../components/RenderMap';

const mapStateToProps = state => {
  return {
    map: state.MapReducer
  };
};

export default connect(mapStateToProps, null)(RenderMap);
