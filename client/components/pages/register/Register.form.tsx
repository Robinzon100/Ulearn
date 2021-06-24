import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import Router, { useRouter } from "next/router";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";
import CheckBoxGroup from "components/lib/checkbox/checkbox-group";


//? UTILS
import { emailRegex, passwordRegex } from "components/utils/regex/Regex";
import { showHidePasswordHandler } from "components/utils/helpers/showHidePassword";
import { postRegistration } from "actions/client/registration.action";
import { checkboxInterface } from 'components/lib/checkbox/checkbox-group';
import { getCategoryIds } from "components/pages/register/utils/getCategoryIds";
import { getCategoriesForCheckBoxes } from "components/pages/register/utils/getCategoriesForCheckBoxes"
import AuthUtils from "components/utils/auth/authUtils";


interface RegistrationValues {
    full_name: string;
    email: string;
    password: string;
    recovery_email: string;
    favorite_main_category_ids: string;
    favorite_sub_category_ids: string;
};



const RegisterComponent = () => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegistrationValues>();


    const router = useRouter();


    const { setCookiesAndRedirect } = AuthUtils();


    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [otherErrors, setOtherErrors] = useState("");
    const [categoryErrors, setCategoryErrors] = useState("");
    const [checkboxContent, setCheckboxContent] = useState<checkboxInterface[]>([]);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [localCheckboxObjects, setLocalCheckboxObjects] = useState([]);



    const categoryIdsHandler = (checkboxObjects) => {
        setLocalCheckboxObjects([])
        setLocalCheckboxObjects(checkboxObjects)
    }



    const onSubmit: SubmitHandler<RegistrationValues> = async (data: RegistrationValues) => {
        const categoryIds = getCategoryIds(localCheckboxObjects, setCategoryErrors) as any

        let registeredUser: RegistrationValues = {
            full_name: data.full_name,
            email: data.email,
            password: data.password,
            recovery_email: data.recovery_email,
            favorite_main_category_ids: JSON.stringify(Array.from(categoryIds)),
            favorite_sub_category_ids: '[1]'
        }

        if (categoryIds.size <= 3){
            const res = await postRegistration(registeredUser);

            if (res.statusCode == 200) {
                setCookiesAndRedirect(res)
                setIsButtonLoading(true)
                Router.reload();
                router.push("/");
            } else {
                setOtherErrors("არასწორი მონაცემები");
            }
        }else {
            setCategoryErrors("თქვენ უნდა აირჩიოთ მხოლოდ სამი კატეგორია")
        }
    };




    useEffect(() => {
        getCategoriesForCheckBoxes(setCheckboxContent)
    }, [])


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
                                placeHolder="თქვენი სახელი და გვარი"
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





                        <div className="base_input_styles recovery_email">
                            <div className="heading">
                                <h1 className="f-size-p6 f-weight-b">
                                    აღსადგენი ელექტრონული ფოსტა
                                </h1>
                            </div>


                            <Input
                                size="large"
                                name="recovery_email"
                                width="100%"
                                type="email"
                                placeHolder="აღსადგენი ელექტრონული ფოსტა"
                                color="white"
                                {...register("recovery_email", {
                                    required:
                                        "აუცილებლად მიუთითეთ თქვენი ანგარიშის აღსადგენი ელექტრონული ფოსტა",
                                    pattern: {
                                        value: emailRegex,
                                        message: "სწორად ჩაწერეთ თქვენი ელექტრონული ფოსტა",
                                    },
                                    validate: () => getValues("recovery_email") != getValues("email")
                                        || 'ელექტრონული ფოსტები არ უნდა ემთხვეოდეს ერთმანეთს',
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
                                placeHolder="თქვენი პაროლი"
                                color="white"
                                iconRight={
                                    <span
                                        onClick={() =>
                                            showHidePasswordHandler(setIsPasswordHidden,
                                                ".registerPassword"
                                            )
                                        }>
                                        {isPasswordHidden ? <EyeOff /> : <Eye />}
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

                            <div className="category_errors">
                                <p className="form_errors f-size-p6 f-weight-r">{categoryErrors}</p>
                            </div>
                        </div>



                        <div className="server_errors">
                            <p className="form_errors f-size-p6 f-weight-r">{otherErrors}</p>
                        </div>




                        <div className="submit_btn">
                            <Button
                                loading={isButtonLoading ? true : false}
                                type="submit"
                                width="100%"
                                size="medium"
                                color="black">
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
