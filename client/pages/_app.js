import '../styles/main.css'
// import "antd/dist/antd.css";
// import 'react-quill/dist/quill.bubble.css';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.core.css';


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp