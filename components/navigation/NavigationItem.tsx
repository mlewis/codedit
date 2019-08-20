import React from 'react';
import styled from 'styled-components';

import Link from '../common/Link';

type Props = {
  path: string,
  name: string,
  icon: React.ReactNode,
};

const NavigationItem: React.FC<Props> = ({ path, name, icon }): React.ReactElement => (
  <Wrapper>
    <StyledLink path={path}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Name>
        {name}
      </Name>
    </StyledLink>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 25%;
  padding: 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: #FFF;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  width: 30px;
  margin: 0 auto;
  fill: #FFF;
`;

const Name = styled.div`
  text-align: center;
  padding-top: 4px;
`;

export default NavigationItem;
