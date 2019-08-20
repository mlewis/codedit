import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode,
};

const Page: React.FC<Props> = ({ children }): React.ReactElement => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 15px;
`;

export default Page;
