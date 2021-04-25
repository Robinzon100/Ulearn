import cookie from 'cookie';
import { GetServerSideProps } from 'next';

//? WON
import { postRefreshToken } from 'actions/client/postRefreshToken.action';

//? UTILS
import { redirect } from 'components/utils/auth/redirect.utils';



const profile = ({value}) => {
    return (
        <div style={{marginTop:"10rem"}}>
            <h1>{value}</h1>
        </div>
    )
}



export const getServerSideProps: GetServerSideProps= async (ctx) => {
    const { auth_access_token, auth_refresh_token, auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
    let newDate = new Date().getTime();


    if (newDate < +auth_token_expiration)
        return redirect('/')


    const res = await postRefreshToken(auth_refresh_token);

    if (res.statusCode == 200) {
        console.log(res.statusCode + "good")
    } else {
        console.log(res.statusCode + "bad")
    }


    return {
        props: {
            value: auth_access_token
        }
    }
}





export default profile
