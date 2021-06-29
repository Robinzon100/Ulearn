

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import { redirect } from 'components/utils/auth/redirect.utils';
import { getAffiliationFromToken } from '../../actions/client/affiliation/affiliation.action';


//? UTILS


//? ACTIONS



const Register = () => {


    return (
        <>
        </>
    );
};



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { auth_access_token, auth_refresh_token, auth_token_expiration } =
        cookie.parse(ctx.req.headers.cookie || "");
    const { affiliationToken } = ctx.params


    await getAffiliationFromToken(`${affiliationToken}`, auth_access_token)

    if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
        return redirect('/');
    } else {
        return redirect('/login');
    }
}


export default Register;
