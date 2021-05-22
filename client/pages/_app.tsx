import '../styles/main.scss'
import Head from "next/head";
import 'video.js/dist/video-js.css'
import { SWRConfig } from 'swr'
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { CookiesProvider } from 'react-cookie';

import Navigation from "components/global/navigation/Navigation"
import BottomNavigation from "components/global/bottom-navigation/BottomNavigation"
import { RootStateProvider } from '../mobx/RootStateContext';
import { swrOptions } from '../constants/swrOptions';




function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Ulearn</title>
                <link rel="shortcut icon" href="#" />
                <meta name="viewport" content="height=device-height, 
                      width=device-width, initial-scale=1, 
                      minimum-scale=1, maximum-scale=1, 
                      user-scalable=no, target-densitydpi=device-dpi"></meta>
            </Head>
            <SWRConfig value={swrOptions}>
                <RootStateProvider>
                    <CookiesProvider>
                        <Navigation />
                        <main className='main'>
                            <Component {...pageProps} />
                        </main>
                        <BottomNavigation/>
                    </CookiesProvider>
                </RootStateProvider>
            </SWRConfig>
        </>
    )
}




export default MyApp