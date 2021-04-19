import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Eye, EyeOff } from 'react-feather';
import { useCookies } from 'react-cookie';


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";
import CheckBoxGroup from "components/lib/checkbox/checkbox-group";


//? UTILS
import { emailRegex, passwordRegex } from "components/utils/Regex";
import { showHidePasswordHandler } from "components/utils/showHidePassword"


//? ACTIONS
import { postRegistration } from "actions/client/registration.action";
import { getAllCategories } from "actions/client/categories.action";
import { checkboxInterface } from '../components/lib/checkbox/checkbox-group';
// import { getAllCategories } from "actions/client/categories.action";


interface RegistrationValues {
  full_name: string;
  email: string;
  password: string;
  recovery_email: string;
  favorite_main_category_ids: string;
  favorite_sub_category_ids: string;
};


//TODO: seperate the register form from the Register page
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationValues>();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(
    ['auth-access_token', 'auth-refresh_token', 'auth-token_expiration']);


  const [otherErrors, setOtherErrors] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [checkboxContent, setCheckboxContent] = useState<checkboxInterface[]>([])
  let categoryIds = new Set();




  const getCategoriesForCheckBoxes = async () => {
    const { categories: { main_categories } } = await getAllCategories()
    let parsedCheckboxContent = []
    main_categories.map(ca => {
      parsedCheckboxContent.push({
        label: ca.name,
        value: ca.id,
        checked: false
      })
    })
    setCheckboxContent(parsedCheckboxContent)
  }


  useEffect(() => {
    getCategoriesForCheckBoxes()
  }, [])



  const categoryIdsHandler = (checkboxObjects) => {
    categoryIds.clear()

    checkboxObjects.map(checkbox => {
      if (checkbox.checked === true)
        categoryIds.add(checkbox.value);
    });

    console.log(categoryIds);


    if (categoryIds.size < 1)
      setOtherErrors("მონიშნეთ 1 კატეგორია მაინც");
    else
      setOtherErrors('')
  }



  const onSubmit: SubmitHandler<RegistrationValues> = async (data: RegistrationValues) => {
    let registeredUser: RegistrationValues = {
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      recovery_email: data.recovery_email,
      favorite_main_category_ids: JSON.stringify(Array.from(categoryIds)),
      favorite_sub_category_ids: '[1]'
    }



    let res = await postRegistration(registeredUser)
    console.log(res)
    console.log(registeredUser)
    if (res.statusCode == 200 && otherErrors.length == 0) {
      setCookie('auth-access_token', res.accessToken);
      setCookie('auth-refresh_token', res.refreshToken);
      setCookie('auth-token_expiration', res.expiration);
      router.push("/");
    } else {
      return setOtherErrors("არასწორი მონაცემები");
    }
  };









  return (
    <>
      <section className="login_registration">
        <div className="login_registration_container">
          {/* <div className="picture"></div> */}

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
                    iconRight={<span
                      onClick={() => showHidePasswordHandler(setIsPasswordHidden, ".registerPassword")}>
                      {isPasswordHidden ? <Eye /> : <EyeOff />}
                    </span>}
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

                  {/* TODO  ADD categories and checked props somehow */}
                  <CheckBoxGroup
                    onChange={categoryIdsHandler}
                    checkboxContent={checkboxContent}
                  />
                </div>


                <div className="server_errors">
                  <p className="form_errors f-size-p6 f-weight-r">
                    {otherErrors}
                  </p>
                </div>

                <div className="submit_btn">
                  <Button
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
        </div>
      </section>
    </>
  );
};



export default Register;
