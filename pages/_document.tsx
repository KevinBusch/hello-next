// REFERENCE: passport token / cookies usage server side ----- see: https://github.com/zeit/next.js/issues/2252
// REFERENCE: global styles ----- see: https://github.com/zeit/next.js/wiki/Global-styles-and-layouts

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import * as React                           from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    console.log("MyDocument", "render()");
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}