import '../styles/main.scss'
import 'video.js/dist/video-js.css'
import { SWRConfig } from 'swr'

import Navigation from "components/global_components/Navigation/Navigation"
import { RootStateProvider } from '../mobx/RootStateContext';
import { swrOptions } from '../constants/swrOptions';



function MyApp({ Component, pageProps }) {
    return (
        <>
            <SWRConfig value={swrOptions}>
                <RootStateProvider>
                    <Navigation />
                    <main className='main'>
                        <Component {...pageProps} />
                    </main>
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