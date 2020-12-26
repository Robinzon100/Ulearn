import { useState } from "react";

//* OUR IMPORTS============================
import Input from "components/global_components/inputs/Input";
import Button from "components/global_components/button/Button";
import Name from "components/stepForm/name";
import SurName from "components/stepForm/surname";


const multiStepForm = () => {
  const [stepFormInfo, setStepFormInfo] = useState({
    name: "",
    surname: "",
  });
  const [stepIndex, setStepIndex] = useState<number>(1);

  const handleNextStep = (e) => {
    e.preventDefault;
    setStepIndex(stepIndex + 1);
  };
  const handlePrevStep = (e) => {
    e.preventDefault;
    setStepIndex(stepIndex - 1);
  };

  const handleInputChange = (e, field: string) => {
    setStepFormInfo({ ...stepFormInfo, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log({ name, surname });
  };
  
  const { name, surname } = stepFormInfo;
  
  const handleStepChange = (i: number) => {
    // debugger
    switch (i) {
      case 1:
        return (
          <Name
            value={name}
            handleInputChange={(e) => handleInputChange(e, "name")}
            handleNextStep={(e) => handleNextStep(e)}
          />
        );

      case 2:
        return (
          <SurName
            value={surname}
            handleInputChange={(e) => handleInputChange(e, "surname")}
            handleNextStep={(e) => handleNextStep(e)}
            handlePrevStep={(e) => handlePrevStep(e)}
          />
        );
      default:
        return <h1>ნამეტანი მოგდის</h1>;
    }
  };

  return (
    <>
      <div className="stepForm_container" style={{ marginTop: "13rem" }}>
        {handleStepChange(stepIndex)}

        <Button
          title="გააგზავნე"
          type="submit"
          size="medium"
          color="white"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </>
  );
};

export default multiStepForm;
