import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            var playerjs = new Playerjs()
                `
          }}
        /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}