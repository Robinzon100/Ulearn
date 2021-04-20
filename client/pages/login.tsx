import {  SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/router";

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import LoginComponent from "components/pages/login/login.component";

//? ACTIONS
import { postLogin } from "actions/client/login.action";





export type LoginValues = {
  email: string;
  password: string;
};


const login = () => {
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState("")
  const [isButtonLoading, setIsButtonLoading] = useState(false);


  const onSubmit: SubmitHandler<LoginValues> = async (data: LoginValues) => {
    let loginedUser: LoginValues = {
      email: data.email,
      password: data.password,
    };

    let res = await postLogin(loginedUser);

    if (res.statusCode == 200) {
        setIsButtonLoading(true)
      router.push("/");
    }else{
      return setServerErrors("მონაცემები არასწორია");
    }
  };





return (
    <>
      <section className="login_registration">
        <div className="login_registration_container">

            <LoginComponent 
                onSubmit={onSubmit} 
                serverErrors={serverErrors} 
                isButtonLoading={isButtonLoading}
            />

        </div>
      </section>
    </>
  );
};



export default login;
