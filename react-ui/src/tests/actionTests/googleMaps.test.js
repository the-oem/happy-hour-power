import * as actions from '../../actions';

describe('googleMaps actions', () => {
  it.skip('should create an action to find current location', () => {
    const location = {
      location
    };
    const expectedAction = {
      type: 'CURRENT_LOCATION',
      location
    };
    expect(actions.currentLocation(location)).toEqual(expectedAction);
  });

  it('should create an action to find nearby locations', () => {
    const data = [
      {
        id: 1,
        name: 'Brothers',
        latitude: 39.7812,
        longitude: 104.892,
        phone_number: '(303)953-0229',
        website_url: 'www.doordash.com'
      },
      {
        id: 2,
        name: 'Lodos Bar and Grill',
        latitude: 39.7533,
        longitude: 104.994,
        phone_number: '(303)293-8555',
        website_url: 'www.lodobar.com'
      }
    ];

    const expectedAction = {
      type: 'NEARBY_LOCATIONS',
      data
    };

    expect(actions.nearbyLocations(data)).toEqual(expectedAction);
  });

  it.skip('should create an action to find map center', () => {
    const position = {
      position
    };
    const expectedAction = {
      type: 'CENTER',
      position
    };
    expect(actions.mapCenter(position)).toEqual(expectedAction);
  });
});
