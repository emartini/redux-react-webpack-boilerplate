import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  it('renders a <div> tag', () => {
    const renderedComponent = shallow(<HelloWorld />);
    expect(renderedComponent.type()).to.equal('div');
  });
});
