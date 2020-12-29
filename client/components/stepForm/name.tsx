import React from "react";
import { ChevronDown} from 'react-feather';

import Input from "components/global_components/inputs/Input";
import Button from "components/global_components/button/Button";


const name = ({ value, handleInputChange,handleNextStep}) => {
    
  return (
    <>
      <Input
        width="50rem"
        placeHolder="შეიყვანეთ სახელი"
        size="medium"
        color="white"
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e, "name")}
        icon={< ChevronDown/>}
      />
      <Button
        title="წინ"
        // type="submit"
        size="medium"
        color="white"
        onClick={handleNextStep}
      />
      
    </>
  );
};

export default name;
