import React from 'react';

import Button from '../components/form/Button';
import { mountWithTheme } from '../utils/test-utils';

describe('Button', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<Button type="button" onClick={() => {}}>Test</Button>).find('button').length === 1).toBe(true);
  });
  it('calls the onClick callback', () => {
    const mockCallback = jest.fn();
    const button = mountWithTheme(<Button type="button" onClick={mockCallback}>Test</Button>);
    button.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});