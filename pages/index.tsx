import React from 'react';
import Head from 'next/head';

import { H1 } from '../components/common/Headers';

const Index: React.FC = (): React.ReactElement => (
  <div>
    <Head>
      <title>Codedit</title>
    </Head>
    <H1>Home</H1>
  </div>
);

export default Index;
