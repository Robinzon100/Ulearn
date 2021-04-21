
//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import LoginForm from "components/pages/login/login.form";

//? ACTIONS


const login = () => {
  
return (
    <>
      <section className="login_registration">
        <div className="login_registration_container">

            <LoginForm />

        </div>
      </section>
    </>
  );
};



export default login;
