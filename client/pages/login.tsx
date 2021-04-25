
import { GetServerSideProps } from 'next';
import cookie from 'cookie';



//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import LoginForm from "components/pages/login/login.form";

//? UTILS



//? ACTIONS
import { postRefreshToken } from "actions/client/postRefreshToken.action";




const login = ({ value }) => {

    return (
        <>
            <section className="login_registration">
                <div className="login_registration_container">

                    <LoginForm />
                    <h1>{value}</h1>

                </div>
            </section>
        </>
    );
};



/*  roca reqze,romelsac schirdeba authpikacia  da pasuxad mova 403
    {
        message:token expired
    }  
    axali req gaagzavne /refresh_token
*/



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { auth_access_token, auth_refresh_token, auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
    let newDate = new Date().getTime();
    
    
    // if (newDate < +auth_token_expiration) {
    //     console.log("you are logged in")
    // } else {
    //     console.log("your token expired");
        
    //     const res = await postRefreshToken({});

    //     if (res.statusCode == 200) {
    //         console.log(res.statusCode + "good")
    //     } else {
    //         console.log(res.statusCode + "bad")
    //     }
    // }


    return {
        props: {
            value: auth_access_token
        }
    }
}



export default login;
