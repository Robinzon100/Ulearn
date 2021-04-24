import '../styles/main.scss'
import Head from "next/head";
import 'video.js/dist/video-js.css'
import { SWRConfig } from 'swr'
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { CookiesProvider } from 'react-cookie';

import Navigation from "components/global/navigation/Navigation"
import { RootStateProvider } from '../mobx/RootStateContext';
import { swrOptions } from '../constants/swrOptions';




function MyApp({ Component, pageProps }:AppProps) {
    return (
        <>
        <Head>
        <title>Ulearn</title>
        <link rel="shortcut icon" href="#"/>
        <meta name="viewport" content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"></meta>
      </Head>
            <SWRConfig value={swrOptions}>
                <RootStateProvider>
                <CookiesProvider>
                    <Navigation />
                    <main className='main'>
                        <Component {...pageProps} />
                    </main>
                </CookiesProvider>
                </RootStateProvider>
            </SWRConfig>
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimizaxtion, causing every page in your app to
// be server-side rendered.
//

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
// //   console.log(fs)
// //   const appProps = await App.getInitialProps(appContext);

//   return { name: "kutu" }
// }

export default MyApp