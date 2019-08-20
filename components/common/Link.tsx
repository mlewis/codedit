import React from 'react';
import styled from 'styled-components';

import NextLink from 'next/link';

type Props = {
  path: string,
  children: React.ReactNode,
  className?: string,
}

const Link: React.FC<Props> = ({ path, children, className = '' }): React.ReactElement => (
  <NextLink href={path} passHref>
    <StyledLink className={className}>
      {children}
    </StyledLink>
  </NextLink>
);

const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary};
`;

export default Link;
