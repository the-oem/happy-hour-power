import React from 'react';
import { shallow, mount } from 'enzyme';
import RenderList from '../../components/RenderList';

describe('RenderList', () => {
  it('should render a list', () => {
    const wrapper = shallow(<RenderList />);

    expect(wrapper.find('.list').length).toBe(1);
  });

  it('should show a title that says "Happy Hour Locations Near You"', () => {
    const wrapper = shallow(<RenderList />);

    expect(wrapper.find('.location-header').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('Happy Hour Locations Near You');
  });
});
