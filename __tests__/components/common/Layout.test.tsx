import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../../components/common/Layout';

describe('Layout', () => {
  it('renders without error', () => {
    expect(shallow(<Layout><div>Test</div></Layout>).find('div').length > 0).toBe(true);
  });
  it('renders passed children', () => {
    expect(shallow(<Layout><span>Test</span></Layout>).find('span').length > 0).toBe(true);
  })
});
