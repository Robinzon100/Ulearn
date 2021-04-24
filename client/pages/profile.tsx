import { GetServerSideProps } from 'next';
import cookie from 'cookie';


const profile = ({value}) => {
    return (
        <div style={{marginTop:"10rem"}}>
            <h1>{value}</h1>
        </div>
    )
}



export const getServerSideProps:GetServerSideProps = async (ctx ) => {
    const { auth_access_token,auth_refresh_token,auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
    // const cookies = ParseCookies(req)

    // if (!auth_access_token) {
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         }
    //     }
    // }


    // if(auth_access_token) {
    //     let newDate = new Date().getTime();

    //     if(newDate < +auth_token_expiration) {
    //         console.log("the acces token is valid and redirect to login")
    //     }else {
    //         return {
    //             redirect:{
    //                 destination: '/',
    //                 permanent: false,
    //             }
    //         }
    //     }
    // }
    
    return {
        props: {
            value:auth_access_token
        }
    }
}


export default profile
