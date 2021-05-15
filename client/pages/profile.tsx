import { GetServerSideProps } from 'next';

//? WON


//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedGet } from '../components/utils/auth/IfTokenExpiered';
// import { ifUserIsAuthenticated } from '../components/utils/auth/redirect.utils';

// import cookie from 'cookie';



const profile = ({ user }) => {
    return (
        <div style={{ marginTop: "10rem" }}>
            <h1>{JSON.stringify(user)}</h1>
        </div>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const res = await authenticatedGet(getUser, ctx)
    // const { auth_access_token } = cookie.parse(ctx.req.headers.cookie || '')
    // const res = await getUser(auth_access_token)


    // console.log(res.user)



    return {
        props: {
            user: res.user
        }
    }
}





export default profile