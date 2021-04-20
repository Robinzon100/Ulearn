import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";
import CheckBoxGroup from "components/lib/checkbox/checkbox-group";

//? UTILS
import { emailRegex, passwordRegex } from "components/utils/Regex";
import { showHidePasswordHandler } from "components/utils/showHidePassword";
import { RegistrationValues } from "../../../pages/register";

const RegisterComponent = ({
  categoryIdsHandler,
  checkboxContent,
  otherErrors,
  onSubmit,
  isButtonLoading
}) => {
  const { register,handleSubmit,formState: { errors } } = useForm<RegistrationValues>();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="base_form_styles registration-forms">
          <div className="title">
            <h1 className="f-size-h7 f-weight-bl">რეგისტრაცია</h1>
          </div>
          <div className="registration-grid grid_base_styles">
            <div className="base_input_styles full_name">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">სახელი და გვარი</h1>
              </div>

              <Input
                size="large"
                name="full_name"
                width="100%"
                type="text"
                placeHolder="beqa arabidze"
                color="white"
                {...register("full_name", {
                  required: "აუცილებლად მიუთითეთ თქვენი სახელი და გვარი",
                  minLength: {
                    value: 2,
                    message: "თქვენი სახელი 2 ასოზე პატარაა?",
                  },
                  maxLength: {
                    value: 20,
                    message: "თქვენი სახელი 20 ასოზე დიდია?",
                  },
                })}
              />

              {errors.full_name && (
                <p className="form_errors f-size-p6 f-weight-r">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            <div className="base_input_styles email">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
              </div>

              <Input
                size="large"
                name="email"
                width="100%"
                type="email"
                placeHolder="arabson1009@gmail.com"
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

            <div className="base_input_styles recovery_email">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">
                  აღსადგენი ელექტრონული ფოსტა
                </h1>
              </div>

              {/* //* მგონი შესამოწმებელი გექნება რომ ერთიდა იგივე არ შეიყანოს */}
              <Input
                size="large"
                name="recovery_email"
                width="100%"
                type="email"
                placeHolder="arab@gmail.com"
                color="white"
                {...register("recovery_email", {
                  required:
                    "აუცილებლად მიუთითეთ თქვენი ანგარიშიც აღსადგენი ელექტრონული ფოსტა",
                  pattern: {
                    value: emailRegex,
                    message: "სწორად ჩაწერეთ თქვენი ელექტრონული ფოსტა",
                  },
                })}
              />

              {errors.recovery_email && (
                <p className="form_errors f-size-p6 f-weight-r">
                  {errors.recovery_email.message}
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
                placeHolder="arabidze98"
                color="white"
                iconRight={
                  <span
                    onClick={() =>
                      showHidePasswordHandler(setIsPasswordHidden,
                        ".registerPassword"
                      )
                    }>
                    {isPasswordHidden ? <Eye /> : <EyeOff />}
                  </span>
                }
                {...register("password", {
                  required: "აუცილებლად მიუთითეთ თქვენი პაროლი",
                  minLength: {
                    value: 5,
                    message: "თქვენი პაროლი 5 სიმბოლოზე პატარაა",
                  },
                  pattern: {
                    value: passwordRegex,
                    message: "თქვენი პაროლი არ არის საკმარისად ძლიერი",
                  },
                })}
              />

              {errors.password && (
                <p className="form_errors f-size-p6 f-weight-r">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="base_input_styles main_category">
              <div className="heading">
                <h1 className="f-size-p6 f-weight-b">სასურველი კატეგორიები</h1>
              </div>

              <CheckBoxGroup
                onChange={categoryIdsHandler}
                checkboxContent={checkboxContent}
              />
            </div>

            <div className="server_errors">
              <p className="form_errors f-size-p6 f-weight-r">{otherErrors}</p>
            </div>

            <div className="submit_btn">
              <Button
                loading={isButtonLoading ? true :false}
                type="submit"
                width="100%"
                size="medium"
                color="black"
                title="რეგისტრაცია">
                <p className="f-weight-r f-size-p4 ">რეგისტრაცია</p>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterComponent;
