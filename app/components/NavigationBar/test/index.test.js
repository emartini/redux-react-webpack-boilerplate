import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NavigationBar from '../index';

describe('<NavigationBar />', () => {
  describe('passing 2 routes as props', () => {
    const props = {
      routes: [
        { name: 'home', to: '/home' },
        { name: 'home2', to: '/home2' }
      ]
    };

    const renderComponent = () => shallow(<NavigationBar {...props} />);

    it('renders 1 <nav> tag', () => {
      expect(renderComponent().type()).to.equal('nav');
    });

    it('renders 2 <li> tags', () => {
      expect(renderComponent()).to.have.exactly(2).descendants('li');
    });

    it('renders 2 <Link> tags', () => {
      expect(renderComponent()).to.have.exactly(2).descendants('Link');
    });
  });
});
