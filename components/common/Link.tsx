import React from 'react';
import styled from 'styled-components';

import NextLink from 'next/link';

type Props = {
  /** The href path for this link */
  path: string,
  /** The link content */
  children: React.ReactNode,
  /** Optional className passed automatically by styled-components */
  className?: string,
};

/**
* Creates an anchor tag that doesn't refresh the page. Wraps
* the next/link component for styling purposes since next/link
* doesn't work with styled-components.
*
* Usage:
*
* ```js
* <Link path="/profile">
*     Click Me
* </Link>
*```
*/
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
