import activeLocationReducer from '../../reducers/activeLocationReducer';
import stubGoogleGeolocation from '../stubData/stubGoogleGeolocation';

describe('activeLocationReducer', () => {
  it('should return a default state', () => {
    expect(activeLocationReducer(undefined, {})).toEqual({});
  });

  it('should return updated active location state', () => {
    const marker = stubGoogleGeolocation;

    expect(activeLocationReducer(marker, 'HANDLE_MARKER_CLICK')).toEqual(
      marker
    );
  });
});
