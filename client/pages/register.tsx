import { useState } from 'react';
import Input from 'components/global_components/inputs/Input';
import { postRegistration } from 'actions/client/registration.action';
import Button from 'components/global_components/button/Button';
import { LogIn } from 'react-feather';

const Register: React.FC = () => {
    const [registrationInfo, setregistrationInfo] = useState({
        full_name: "",
        email: "",
        password: "",
        recovery_email: "",
        favorite_main_category_ids: JSON.stringify([1, 2, 3]),
        favorite_sub_category_ids: JSON.stringify([1, 2, 3])
    })
    let { full_name, email, password, recovery_email } = registrationInfo





    const handleInputChange = (e, field: string) => {
        setregistrationInfo({ ...registrationInfo, [field]: e.target.value })
    }

    const handleSend = async () => {
        let response = await postRegistration(registrationInfo)
        console.log(response);
        console.log('asdasd')
    }





    return (
        <>

            <Input
                style={{ marginTop: '10rem' }}
                size={'large'}
                placeHolder='enter your full name'
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
                onChange={(e) => handleInputChange(e, 'password')} />
            <Input
                style={{ marginTop: '1rem' }}
                size={'large'}
                placeHolder='enter your recovery email'
                value={recovery_email}
                type='email'
                className={"regular paragraph-small"}
                width='50rem'
                onChange={(e) => handleInputChange(e, 'recovery_email')} />

            {/* <Button
                color='primary'
                size='medium'
                title='დარეგისტრირება'
                onClick={() => handleSend()}
<<<<<<< HEAD
                iconRight={<LogIn strokeWidth={'1.5px'}/>}
            />
=======
                iconRight={<LogIn />}
            /> */}
>>>>>>> 26c52a75f95b2af6f8ad221aa67ed888f324f611
        </>
    )
}


export default Register