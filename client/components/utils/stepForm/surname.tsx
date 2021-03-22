import Input from "components/lib/inputs/Input";

const surname = ({value,handleInputChange}) => {
  return (
    <Input
      placeHolder="შეიყვანეთ გვარი"
      size="medium"
      color="white"
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e, "surname")}
      width="50rem"
    />
  );
};

export default surname;
