import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script src="js/player.js" async defer></script>

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