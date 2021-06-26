import { Eye, EyeOff } from "react-feather";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Router, { useRouter } from "next/router";

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";

//? UTILS
import { emailRegex } from "components/utils/regex/Regex";
import { showHidePasswordHandler } from "components/utils/helpers/showHidePassword";

//? ACTIONS
import { postLogin } from "actions/client/login.action";
import AuthUtils from "components/utils/auth/authUtils";





type LoginValues = {
  email: string;
  password: string;
};





const LoginForm = () => {
  const router = useRouter();

  const {register,handleSubmit,formState: { errors },} = useForm<LoginValues>();

  const { setCookiesAndRedirect } = AuthUtils();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [serverErrors, setServerErrors] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginValues> = async (data: LoginValues) => {
    let loginedUser: LoginValues = {
      email: data.email,
      password: data.password,
    };

    let res = await postLogin(loginedUser);

    if (res.statusCode == 200) {
      setCookiesAndRedirect(res);
      setIsButtonLoading(true);
      Router.reload();
      router.push("/");
    } else {
      return setServerErrors("მონაცემები არასწორია");
    }
  };

  return (
    <>
      
        <div className="base_form_styles login_forms">
          <div className="title">
            <h1 className="f-size-h7 f-weight-bl">ავტორიზაცია</h1>
          </div>


          
          <div className="grid_base_styles">
          <form onSubmit={handleSubmit(onSubmit)} className="login-grid">

            <div className="base_input_styles email">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
              </div>
        
              <Input
                size="large"
                name="email"
                width="100%"
                type="email"
                placeHolder="თქვენი ელექტრონული ფოსტა"
                color="white"
                {...register("email", {
                  required: "აუცილებლად მიუთითეთ თქვენი ელექტრონული ფოსტა",
                  pattern: {
                    value: emailRegex,
                    message: "სწორად ჩაწერეთ თქვენი ელექტრონული ფოსტა",
                  },
                })}
              />

              {errors.email && (
                <p className="form_errors f-size-p6 f-weight-r">
                  {errors.email.message}
                </p>
              )}
            </div>





            <div className="base_input_styles password">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">პაროლი</h1>
              </div>

              <Input
                className="registerPassword"
                size="large"
                name="password"
                width="100%"
                type="password"
                placeHolder="თქვენი პაროლი"
                color="white"
                iconRight={
                  <span
                    onClick={() =>
                      showHidePasswordHandler(
                        setIsPasswordHidden,
                        ".registerPassword"
                      )
                    }
                  >
                    {isPasswordHidden ? <EyeOff /> : <Eye />}
                  </span>
                }
                {...register("password", {
                  required: "აუცილებლად მიუთითეთ თქვენი პაროლი",
                })}
              />

              {errors.password && (
                <p className="form_errors f-size-p6 f-weight-r">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="server_errors">
              <p className="form_errors f-size-p6 f-weight-r">{serverErrors}</p>
            </div>





            <div className="submit_btn">
              <Button
                loading={isButtonLoading ? true : false}
                type="submit"
                width="100%"
                size="medium"
                color="black">
                <p className="f-weight-r f-size-p4 ">ავტორიზაცია</p>
              </Button>
            </div>
            
            </form>



            <div className="register_btn">
              <Button 
              width="100%" 
              size="small" 
              color="green" 
              route="/register">
                <p className="f-weight-r f-size-p4 ">რეგისტრაცია</p>
              </Button>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginForm;
