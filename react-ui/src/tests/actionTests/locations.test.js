import * as actions from '../../actions';
import stubDBLocations from '../stubData/stubDBLocations';
import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

describe('locations actions', () => {
  it('should create an action to find database locations', () => {
    const locations = stubDBLocations;
    const expectedAction = {
      type: 'DATABASE_LOCATIONS',
      locations
    };
    expect(actions.databaseLocations(locations)).toEqual(expectedAction);
  });

  it.skip('should create an action for locations error', () => {
    const error = {
      error
    };
    const expectedAction = {
      type: 'LOCATIONS_ERROR',
      error
    };
    expect(actions.locationsError(error)).toEqual(expectedAction);
  });

  it.skip('should fetch locations from database', () => {
    const mockLocations = stubDBLocations;

    fetchMock.get(`/api/v1/locations`, {
      status: 200,
      body: mockLocations
    });

    const mockFn = jest.fn();

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual(`/api/v1/locations`);
  });
});
