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
                    window
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