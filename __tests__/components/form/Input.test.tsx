import React from 'react';

import Input from '../../../components/form/Input';
import { mountWithTheme } from '../../../utils/test-utils';

describe('Input', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<Input value="test" onChange={() => {}} name="test" type="test" />).find('input').length === 1).toBe(true);
  })
});
