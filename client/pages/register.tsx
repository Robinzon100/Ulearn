import { SubmitHandler } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';


// //! ─── OWN ────────────────────────────────────────────────────────────────────────
// //? COMPONENTS
import RegisterComponent from './../components/pages/register/Register.component';


// //? UTILS
import { getCategoriesForCheckBoxes } from "components/pages/register/utils/getCategoriesForCheckBoxes"

//? ACTIONS
import { postRegistration } from "actions/client/registration.action";
import { checkboxInterface } from '../components/lib/checkbox/checkbox-group';



export interface RegistrationValues {
    full_name: string;
    email: string;
    password: string;
    recovery_email: string;
    favorite_main_category_ids: string;
    favorite_sub_category_ids: string;
};


const Register = () => {
    const router = useRouter();
    const [, setCookie] = useCookies(
        ['auth-access_token', 'auth-refresh_token', 'auth-token_expiration']);


    const [otherErrors, setOtherErrors] = useState("");
    const [checkboxContent, setCheckboxContent] = useState<checkboxInterface[]>([])
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    let categoryIds = new Set();



    const categoryIdsHandler = (checkboxObjects) => {
        categoryIds.clear();

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
        debugger
        let registeredUser: RegistrationValues = {
            full_name: data.full_name,
            email: data.email,
            password: data.password,
            recovery_email: data.recovery_email,
            favorite_main_category_ids: JSON.stringify(Array.from(categoryIds)),
            favorite_sub_category_ids: '[1]'
        }
        

        let res = await postRegistration(registeredUser);
        debugger

        console.log(res)
        console.log(registeredUser)
        if (res.statusCode == 200 && otherErrors.length == 0) {
            setCookie('auth-access_token', res.accessToken);
            setCookie('auth-refresh_token', res.refreshToken);
            setCookie('auth-token_expiration', res.expiration);
            setIsButtonLoading(true)
            router.push("/");
        } else {
            setOtherErrors("არასწორი მონაცემები");
        }
    };


    

    useEffect(() => {
        getCategoriesForCheckBoxes(setCheckboxContent)
    }, [])



    return (
        <>
            <section className="login_registration">
                <div className="login_registration_container">
                    
                     <RegisterComponent
                        onSubmit={onSubmit}
                        categoryIdsHandler={categoryIdsHandler}
                        checkboxContent={checkboxContent}
                        otherErrors={otherErrors}
                        isButtonLoading={isButtonLoading}
                    />

                </div>
            </section>
        </>
    );
};



export default Register;
