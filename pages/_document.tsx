import React from 'react';
import Document, { Head, Main, NextScript, DocumentContext, DocumentProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import theme from '../theme';

type CustomDocumentProps = DocumentProps & {
  styleTags: React.ReactElement,
};

class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styleTags: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content={theme.colors.primary} />

          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
          <link href="/static/global.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/ysx0rsm.css" />

          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
