import React from 'react';
import App, { Container, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

import Layout from '../components/common/Layout';

class CustomApp extends App<AppProps> {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}

export default CustomApp;
