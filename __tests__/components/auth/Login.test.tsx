import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../../components/auth/Login';

describe('Login', () => {
  it('renders without error', () => {
    expect(shallow(<Login />).find('div').length > 0).toBe(true);
  });
});
