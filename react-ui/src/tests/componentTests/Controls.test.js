import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Controls from '../../components/Controls';

describe('Controls', () => {
  it('should have a button to toggle display', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').hasClass('toggle-btn')).toBe(true);
  });

  it('should have a map/list display area', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('.map-list-view')).toHaveLength(1);
  });
});
