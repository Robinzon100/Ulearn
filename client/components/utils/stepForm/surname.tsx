

import Input from "components/lib/inputs/Input";
import Button from 'components/lib/button/Button';


const surname = ({ value, handleInputChange,handleNextStep,handlePrevStep }) => {
    return (
        <>
            
        <Input
          placeHolder="შეიყვანეთ გვარი"
          size="medium"
          color="white"
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e, "surname")}
          width="100%"
        />

<Button
        title="წინ"
        // type="submit"
        size="medium"
        color="white"
        onClick={handleNextStep}
      />
      <Button
       title="უკან"
       // type="submit"
       size="medium"
       color="white"
       onClick={handlePrevStep}
      
      />
        </>
    )
}

export default surname;
