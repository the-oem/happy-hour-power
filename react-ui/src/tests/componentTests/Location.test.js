import React from 'react';
import { shallow, mount } from 'enzyme';
import Location from '../../components/Location';

describe('Location', () => {
  it('should include an arrow icon', () => {
    const wrapper = shallow(<Location />);

    expect(wrapper.find('img').length).toEqual(1);
  });
});
