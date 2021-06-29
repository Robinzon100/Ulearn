import '../styles/main.scss'

import 'video.js/dist/video-js.css'
import { SWRConfig } from 'swr'
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { CookiesProvider } from 'react-cookie';


import HeadAndMeta from 'components/global/head/HeadAndMeta';
import Navigation from "components/global/navigation/Navigation"
import BottomNavigation from "components/global/bottom-navigation/BottomNavigation"
import { RootStateProvider } from '../mobx/RootStateContext';
import { swrOptions } from '../constants/swrOptions';
import { NewCourseStateProvider } from 'mobx/newCourseStateContext';
import { CommentProvider } from 'mobx/commentContext';



function MyApp({ Component, pageProps }: AppProps) {


    return (
        <>
            <HeadAndMeta
                title="Ulearn"
                description="You teach and learn on Ulearn"
                favIconImagePath="/pictures/icon.svg"
                baseUrl="https://oxeni.dev/meta_images/og_image.png"
                ogTitle="📖 Ulearn"
                ogDescription="You teach and learn on Ulearn"
                ogImagePath=""
            />
            <SWRConfig value={swrOptions}>
                <NewCourseStateProvider>
                    <CommentProvider>
                        <RootStateProvider>
                            <CookiesProvider>
                                <Navigation />
                                <main className='main'>
                                    <Component {...pageProps} />
                                </main>
                                <BottomNavigation />
                            </CookiesProvider>
                        </RootStateProvider>
                    </CommentProvider>
                </NewCourseStateProvider>
            </SWRConfig>
        </>
    )
}





export default MyApp