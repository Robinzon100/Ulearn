import { useState } from "react";



//* OUR IMPORTS============================
import Button from "components/lib/button/Button";
import Name from "components/utils/stepForm/name";
import SurName from "components/utils/stepForm/surname";



const MultiStepForm = ({ isFormToggled, FormToggle }) => {
    const initialValue = 1;

    const [stepFormInfo, setStepFormInfo] = useState({
        name: "",
        surname: "",
    });
    
    const [stepIndex, setStepIndex] = useState<number>(initialValue);

    const [, setIsSubmitValid] = useState<boolean>();


    //* GOES TO NEXT STEP
    const handleNextStep = () => {
        setStepIndex(stepIndex + 1);
        console.log(stepIndex);
    };


    //* GOES TO PREV STEP
    const handlePrevStep = () => {
        setStepIndex(stepIndex - 1);
        console.log(stepIndex);
    };


    //* HERE COMES ALL THE INPUT VALUES
    const handleInputChange = (e, field: string) => {
        setStepFormInfo({ ...stepFormInfo, [field]: e.target.value });
    };


    //* WE SUBMIT INPUT VALUES
    const handleSubmit = () => {
        if (name.length < 5 || surname.length < 6) {
            setIsSubmitValid(false);
            console.log("რაღაცა ნიტოა")
        } else {
            setIsSubmitValid(true);
            console.log({ name, surname });
        }
    };



    //* STATE ACTIONS IF USER DELETES STEPFORM;
    const deleteFormActions = () => {
        FormToggle(false);

        setStepFormInfo({name:"",surname:""});
        
        setStepIndex(initialValue)
    }

    const { name, surname } = stepFormInfo;



    const handleStepChange = (i: number) => {
        switch (i) {
            case 1:
                return (
                    <Name
                        value={name}
                        handleInputChange={(e) => handleInputChange(e, "name")}
                    />
                );

            case 2:
                return (
                    <SurName
                        value={surname}
                        handleInputChange={(e) => handleInputChange(e, "surname")}
                    />
                );
            default:
                return (
                    <>
                        <h1>{name}</h1>
                        <br />
                        <h1>{surname}</h1>
                        <Button
                            title="უკან დაბრუნება"
                            size="medium"
                            color="yellow"
                            onClick={() => handlePrevStep()}
                            width="30rem"
                        />
                    </>
                );
        }
    };

    return (
        <>
            {isFormToggled &&
                <div className="stepForm_container">
                    <div className="step-forms">

                        {handleStepChange(stepIndex)}

                        <br />

                        <Button
                            title="წინ"
                            size="medium"
                            color="white"
                            onClick={() => handleNextStep()}
                        />



                        <Button
                            title="უკან"
                            size="medium"
                            color="white"
                            onClick={() => handlePrevStep()}
                        />



                        <Button
                            title="გააგზავნე"
                            type="submit"
                            size="medium"
                            color="green"
                            onClick={() => handleSubmit()}
                            width="30rem"
                        />


                        <br />

                        <Button
                            title="წაშალე ფორმა"
                            size="medium"
                            color="red"
                            width="30rem"
                            onClick={() => deleteFormActions()}
                        />
                    </div>

                </div>
            }
        </>
    );
};

export default MultiStepForm;
