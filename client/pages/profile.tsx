import cookie from 'cookie';
import { GetServerSideProps } from 'next';

//? WON
import { postRefreshToken, } from 'actions/client/postRefreshToken.action';

//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { bla } from "components/utils/auth/IfTokenExpiered"



const profile = ({value}) => {
    return (
        <div style={{marginTop:"10rem"}}>
            <h1>{value}</h1>
        </div>
    )
}



export const getServerSideProps: GetServerSideProps= async (ctx) => {
    const { auth_access_token, auth_refresh_token } = cookie.parse(ctx.req.headers.cookie || '')
    // let date = new Date().getTime();

    const accessRes = await getUser(auth_access_token);
    const refreshRes = await postRefreshToken(auth_refresh_token);

    return bla(accessRes,refreshRes,ctx)

}





export default profile
