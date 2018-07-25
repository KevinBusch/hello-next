import App, { Container } from 'next/app'
import * as React         from 'react'
import Chat               from '@components/chat';

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    console.log("MyApp", "render()");
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Chat />
        <Component {...pageProps} />
      </Container>
    );
  }

  
}