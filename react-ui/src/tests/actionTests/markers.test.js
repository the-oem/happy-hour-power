import * as actions from '../../actions';

describe('markers actions', () => {
  it.skip('should create an action to handle marker click', () => {
    const marker = {
      marker
    };
    const expectedAction = {
      type: 'HANDLE_MARKER_CLICK',
      marker
    };
    expect(actions.handleMarkerClick(marker)).toEqual(expectedAction);
  });
});
