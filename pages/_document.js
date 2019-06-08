import Document, { Html, Head, Main, NextScript } from 'next/document'
import colors from 'sick-colors'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            body {
              margin: 0;
              padding: 0;
              font-family: 'SF Mono', Menlo, monospace;
              background-color: ${colors.background};
              color: ${colors.foreground};
            }
          `}
        </style>
      </Html>
    )
  }
}

export default MyDocument
