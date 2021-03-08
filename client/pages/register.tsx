import { useState, } from 'react';
import Input from 'components/lib/inputs/Input';
import { postRegistration } from 'actions/client/registration.action';
import Button from 'components/lib/button/Button';
import { LogIn, Mail, Eye } from 'react-feather';
import { useCookies } from 'react-cookie';
// import { useRootStore } from '../mobx/RootStateContext';

const Register = () => {
    const [cookie, setCookie] = useCookies()

    // const { userStore } = useRootStore();




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
        if (response) {
            setCookie('refreshToken', response.refreshToken, { sameSite: true })
            localStorage.setItem('token', JSON.stringify({token: response.accessToken, expiration: response.expiration}))
            // userStore.isLogedIn = true
            console.log(cookie);
            
        }
    }


    let { full_name, email, password, recovery_email } = registrationInfo

    return (
        <>
        {/* //* აქ შეიძლება ვცდები მაგრამ მგონი ერმანეთზე რო იყო მიჯრილი მაგიტო იჭრებოდა შადოუ */}
        {/* //* კონტეინერსტაილს მიეცი თუ გინდა რომ მარგინი ქნას */}
            <Input
                size={'medium'}
                color='white'
                placeHolder='enter your full name'
                containerStyle={{ marginTop: '10rem' }}
                value={full_name}
                type='text'
                width='50rem'
                onChange={(e) => handleInputChange(e, 'full_name')} />


                <Input
                containerStyle={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your email'
                value={email}
                type='email'
                iconRight={<Mail size={20} strokeWidth='1.5px' />}
                width='50rem'
                onChange={(e) => handleInputChange(e, 'email')} />


                <Input
                containerStyle={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your password'
                value={password}
                type='password'
                width='50rem'
                iconRight={<Eye size={20} strokeWidth='1.5px' />}
                onChange={(e) => handleInputChange(e, 'password')} />


                <Input
                containerStyle={{ marginTop: '1rem' }}
                size={'medium'}
                color='white'
                placeHolder='enter your recovery email'
                value={recovery_email}
                type='email'
                icon={<Mail size={16} strokeWidth='1.5px' />}
                width='50rem'
                onChange={(e) => handleInputChange(e, 'recovery_email')} />

            <Button
                color='black'
                size='small'
                title='დარეგისტრირდი'
                onClick={() => handleSend()}
                style={{ marginTop: '2rem' }}
                iconRight={<LogIn strokeWidth="1.8" size={24} />}
            // buttonWidth='100%'
            />

            {/* <p>{userStore.isLogedIn = false}</p> */}
        </>
    )
}


export default Register