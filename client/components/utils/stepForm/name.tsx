import Input from "components/lib/inputs/Input";


const name = ({ value, handleInputChange}) => {
    
  return (

      <Input
        width="50rem"
        placeHolder="შეიყვანეთ სახელი"
        size="medium"
        color="white"
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e, "name")}
      />

  );
};

export default name;
