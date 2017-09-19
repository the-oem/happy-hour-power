import { connect } from 'react-redux';
import { DetailsPage } from '../components/DetailsPage';
import { fetchDetail } from '../actions';

const mapStateToProps = state => {
  return {
    locationDetails: state.details,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDetail: id => dispatch(fetchDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
