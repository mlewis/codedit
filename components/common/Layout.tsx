import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode,
};

const Layout: React.FC<Props> = ({ children }): React.ReactElement => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontBaseSize};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.lighterGrey};
`;

export default Layout;
