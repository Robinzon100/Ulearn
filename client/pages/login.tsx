
import { GetServerSideProps } from 'next';


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import LoginForm from "components/pages/login/login.form";

//? UTILS
import { ifUserLoginOrRegister } from '../components/utils/auth/redirect.utils';



//? ACTIONS



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




export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return ifUserLoginOrRegister(ctx)
}


export default login;
