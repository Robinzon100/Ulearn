import { useState } from 'react';
import Input from 'components/global_components/inputs/Input';
import { postRegistration } from 'actions/client/registration.action';
import Button from 'components/global_components/button/Button';
import { LogIn, ArrowUp, Search, Mail, Eye } from 'react-feather';
import { useCookies } from 'react-cookie';
import { useRootStore } from '../mobx/RootStateContext';

const Register: React.FC = () => {
    const [cookie, setCookie] = useCookies()
    const { userStore } = useRootStore();




    const [registrationInfo, setregistrationInfo] = useState({
        full_name: "",
        email: "",
        password: "",
        recovery_email: "",
        favorite_main_category_ids: JSON.stringify([1, 2, 3]),
        favorite_sub_category_ids: JSON.stringify([1, 2, 3])
    })



    const handleInputChange = (e, field: string) => setregistrationInfo({ ...registrationInfo, [field]: e.target.value })


    const handleSend = async () => {
        let response = await postRegistration(registrationInfo)
        setCookie('refreshToken', response.refreshToken, { sameSite: true })
        if (response) {
            userStore.isLogedIn = true
        }
        localStorage.setItem('accessToken', response.accessToken)
    }




    let { full_name, email, password, recovery_email } = registrationInfo

    return (
        <>
            <Input
                size={'large'}
                placeHolder='enter your full name'
                style={{ marginTop: '1rem' }}
                value={full_name}
                type='text'
                className={"regular paragraph-small"}

                width='50rem'
                onChange={(e) => handleInputChange(e, 'full_name')} />
            <Input
                style={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your email'
                value={email}
                type='email'
                className={"regular paragraph-small"}
                iconRight={<Mail size={20} strokeWidth='1.5px' />}
                width='50rem'
                onChange={(e) => handleInputChange(e, 'email')} />
            <Input
                style={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your password'
                value={password}
                type='password'
                className={"regular paragraph-small"}
                width='50rem'
                iconRight={<Eye size={20} strokeWidth='1.5px' />}
                onChange={(e) => handleInputChange(e, 'password')} />
            <Input
                style={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your recovery email'
                value={recovery_email}
                type='email'
                className={"regular paragraph-small"}
                iconRight={<Mail size={20} strokeWidth='1.5px' />}
                width='50rem'
                onChange={(e) => handleInputChange(e, 'recovery_email')} />

            <Button
                color='black'
                size='large'
                title='დარეგისტრირდი'
                onClick={() => handleSend()}
                style={{ marginTop: '2rem' }}
                iconRight={<LogIn strokeWidth="1.8" size={24} />}
            // buttonWidth='100%'
            />

            <p>asd{JSON.stringify(userStore.isLogedIn)}</p>
        </>
    )
}


export default Register