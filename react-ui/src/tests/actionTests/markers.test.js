import * as actions from '../../actions';

describe('markers actions', () => {
  it.only('should create an action to provide location details', () => {
    const data = {
      name: "ELWAY'S",
      rating: 4.1,
      vicinity: '1881 Curtis Street, Denver'
    };
    const expectedAction = {
      type: 'DETAIL_LOCATION',
      data
    };
    expect(actions.detailLocation(data)).toEqual(expectedAction);
  });
});
