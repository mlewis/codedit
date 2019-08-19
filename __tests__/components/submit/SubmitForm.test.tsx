import React from 'react';

import SubmitForm from '../../../components/submit/SubmitForm';
import { mountWithTheme } from '../../../utils/test-utils';

describe('SubmitForm', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<SubmitForm />).find('form').length === 1).toBe(true);
  });
});
