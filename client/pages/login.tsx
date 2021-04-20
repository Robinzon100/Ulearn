
//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import LoginComponent from "components/pages/login/login.component";

//? ACTIONS


const login = () => {
  
return (
    <>
      <section className="login_registration">
        <div className="login_registration_container">

            <LoginComponent />

        </div>
      </section>
    </>
  );
};



export default login;
