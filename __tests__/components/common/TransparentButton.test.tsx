import React from 'react';

import TransparentButton from '../../../components/common/TransparentButton';
import { mountWithTheme } from '../../../utils/test-utils';

describe('TransparentButton', () => {
  it('renders without error', () => {
    expect(mountWithTheme(<TransparentButton type="button" onClick={() => {}}>Test</TransparentButton>).find('button').length === 1).toBe(true);
  });
  it('calls the onClick callback', () => {
    const mockCallback = jest.fn();
    const button = mountWithTheme(<TransparentButton type="button" onClick={mockCallback}>Test</TransparentButton>);
    button.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});