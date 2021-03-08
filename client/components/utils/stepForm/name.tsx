
import { ChevronDown} from 'react-feather';

import Input from "components/lib/inputs/Input";
import Button from "components/lib/button/Button";


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
