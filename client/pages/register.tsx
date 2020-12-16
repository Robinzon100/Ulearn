import { useState } from 'react';
import Input from 'components/global_components/inputs/Input';
import { postRegistration } from 'actions/client/registration.action';
import Button from 'components/global_components/button/Button';
import { LogIn, ArrowUp, Search } from 'react-feather';

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
                color="white"
                size="medium"
                type="text"
                placeHolder="მოძებნე სასურველი კურსი"
                icon={<Search size={20} />}
                
            // disabled={true}
            />

            <Input
                style={{ marginTop: '10rem' }}
                size={'large'}
                placeHolder='enter your full name'
                value={full_name}
                type='text'
                className={"regular paragraph-small"}
                icon={<Search size={20} />}
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

            {/* //? აიქონისთვის ფერის გადაცემა არ გინდა. გავაკეთე ისე რომ როგორც შეიცვლი ისე შეიცვლება */}
            {/* //? ფერიც.იგივე ლოგიკა გამოდის რაც ჰოვერზე და აქტივ ტექსტზე,ამიტომ ძალიან მარტივად გამოვიდე */}
            {/* //? მგონი არაფერი გამომრჩენია და კარგად ყველაფერი. თუ არადა დაწერე */}
            <Button
                color='black'
                size='large'
                title='დარეგისტრირდი'
                onClick={() => handleSend()}
                style={{ marginTop: '2rem' }}
                iconRight={<LogIn strokeWidth="1.8" size={24} />}
            // buttonWidth='100%'
            />
        </>
    )
}


export default Register