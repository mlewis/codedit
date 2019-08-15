import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

const getThemeProviderWrappingComponent = theme => ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const shallowWithTheme = (tree: React.ReactElement) => {
  return shallow(tree, {
    wrappingComponent: getThemeProviderWrappingComponent(theme)
  })
    .dive()
    .dive();
};

export const mountWithTheme = (component: React.ReactElement) => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent(theme)
  });

  return wrapper;
};