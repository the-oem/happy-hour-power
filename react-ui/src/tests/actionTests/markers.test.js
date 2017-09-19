import * as actions from '../../actions';

describe('markers actions', () => {
  it('should have an action that handles a click event', () => {
    const marker = {
      name: "ELWAY'S",
      rating: 4.1,
      vicinity: '1881 Curtis Street, Denver'
    };

    const expectedAction = {
      type: 'HANDLE_MARKER_CLICK',
      marker
    };

    expect(actions.handleMarkerClick(marker)).toEqual(expectedAction);
  });
});
