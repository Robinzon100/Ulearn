import RegisterForm from 'components/pages/register/Register.form';


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import { ifUserLoginOrRegister } from 'components/utils/auth/redirect.utils';
import { GetServerSideProps } from 'next';


//? UTILS


//? ACTIONS



const Register = () => {


    return (
        <>
            <section className="login_registration">
                <div className="login_registration_container">
                    <RegisterForm />
                </div>
            </section>
        </>
    );
};



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return ifUserLoginOrRegister(ctx)
}


export default Register;
