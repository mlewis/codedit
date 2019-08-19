import React from 'react';

import Textarea from '../../../components/form/Textarea';
import { mountWithTheme } from '../../../utils/test-utils';

describe('Textarea', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<Textarea value="test" onChange={() => {}} name="test" />).find('textarea').length === 1).toBe(true);
  })
});
