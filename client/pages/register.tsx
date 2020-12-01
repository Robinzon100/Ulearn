import { useState } from 'react';
import Input from 'components/global_components/inputs/input';
import { postRegistration } from 'actions/client/registration.actions';

const Register: React.FC = () => {
    const [registrationInfo, setregistrationInfo] = useState({
        "full_name": "",
        "email": "",
        "password": "",
        "recovery_email": "",
        "favorite_main_category_ids": [1, 2, 3],
        "favorite_sub_category_ids": [1, 2, 3]
    })

    const handleInputChange = (e, field: string) => {
        setregistrationInfo({ ...registrationInfo, [field]: e.target.value })
    }

    let { full_name, email, password, recovery_email } = registrationInfo


    return (
        <>
            <Input
                style={{ marginTop: '10rem' }}
                placeHolder='enter your full name'
                value={full_name}
                type='text'
                onChange={(e) => handleInputChange(e, 'full_name')} />
            <Input
                placeHolder='enter your email'
                value={email}
                type='text'
                onChange={(e) => handleInputChange(e, 'email')} />
            <Input
                placeHolder='enter your password'
                value={password}
                type='text'
                onChange={(e) => handleInputChange(e, 'password')} />
            <Input
                placeHolder='enter your recovery email'
                value={recovery_email}
                type='text'
                onChange={(e) => handleInputChange(e, 'recovery_email')} />


            <button onClick={() => postRegistration(registrationInfo)} >register</button>
        </>
    )
}


export default Register