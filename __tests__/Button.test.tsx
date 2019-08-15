import React from 'react';

import Button from '../components/form/Button';
import { mountWithTheme } from '../utils/test-utils';



describe('Button', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<Button type="button" onClick={() => {}}>TEst</Button>).find('button').length === 1).toBe(true);
  });
});