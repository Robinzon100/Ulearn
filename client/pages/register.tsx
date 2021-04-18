import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";

//? UTILS
import { emailRegex, passwordRegex } from "components/utils/Regex";
import CheckBoxGroup from "components/lib/checkbox/checkbox-group";
import { postRegistration } from "actions/client/registration.action";





type FormValues = {
  full_name: string;
  email: string;
  password: string;
  recovery_email: string;
  favorite_main_category_ids: string;
  favorite_sub_category_ids: string;
};






const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  let categoryIds = new Set()


  let categoryIdsHandler = (checkboxObjects) => {
    checkboxObjects.map(checkbox => {
      if (checkbox.checked === true)
        categoryIds.add(checkbox.value)
    })
  }




  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    let registeredUser: FormValues = {
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      recovery_email: data.recovery_email,
      favorite_main_category_ids: JSON.stringify(Array.from(categoryIds)),
      favorite_sub_category_ids: '[1]'
    }

    let res = await postRegistration(registeredUser)
    console.log(res)
  };






  return (
    <>
      <section className="registration">
        <div className="registration_container">
          {/* <div className="picture"></div> */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="registration_forms">
              <div className="title">
                <h1 className="f-size-h7 f-weight-bl">რეგისტრაცია</h1>
              </div>

              <div className="registration-grid grid_base_styles">
                <div className="base_input_styles full_name">
                  <div className="heading">
                    <h1 className="f-size-p6 f-weight-b">სახელი და გვარი</h1>
                  </div>

                  <Input
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
                    name="password"
                    width="100%"
                    type="password"
                    placeHolder="arabidze98"
                    color="white"
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
                    <h1 className="f-size-p6 f-weight-b">
                      სასურველი კატეგორიები
                    </h1>
                  </div>


                  <CheckBoxGroup
                    onChange={categoryIdsHandler}
                    checkboxes={[
                      {
                        label: 'პროგრამირება',
                        value: 23,
                        checked: false
                      },
                      {
                        label: 'მუსიკა',
                        value: 44,
                        checked: false
                      },
                      {
                        label: 'დიზაინი',
                        value: 5,
                        checked: false
                      },
                    ]}
                  // {...register("main_category")}
                  />


                </div>

                <div className="server_errors"></div>

                <div className="submit_btn">
                  <Button
                    type="submit"
                    width="100%"
                    size="medium"
                    color="black"
                    title="რეგისტრაცია"
                  >
                    <p className="f-weight-r f-size-p4 ">რეგისტრაცია</p>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
