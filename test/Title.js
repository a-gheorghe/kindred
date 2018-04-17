import React from 'react';
import expect from 'expect';
import { describe, it } from 'mocha';

import { shallow } from 'enzyme';

import Landing from './../frontend/components/Landing';

describe('Component: App', () => {
  it('should render the App component', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.find('h1').text()).toEqual('Horizons');
  });

  it('should run a solid smoke test', () => {
    expect(true).toEqual(true);
  });
});
