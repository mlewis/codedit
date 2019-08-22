import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

type Props = {
  /** The page contents */
  children: React.ReactNode,
  /** The meta title for this page */
  title: string,
};

/**
* A wrapper for a page that provides some basic page-specific
*  functionality like meta tags.
*
* Usage:
*
* ```js
* <Page title="Home">
*     <div>The homepage</div>
* </Page>
*```
*/
const Page: React.FC<Props> = ({ children, title }): React.ReactElement => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 15px;
`;

export default Page;
