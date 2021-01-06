import {FC, useState } from "react";
import CheckBox from "components/global_components/checkbox/checkbox";

interface checkbox {
  label: string;
  value: string | number;
  checked: boolean;
}
interface Props {
  onChange: (newValue: any[]) => any;
  checkboxes?: checkbox[]
}

const checkBoxGroup: FC<Props> = ({ onChange, checkboxes}) => {      
  const [checkBoxes, setCheckBoxes] = useState<any[]>(checkboxes);


  const changeHandler = ({checked, value}) => {
    let checkedObject = checkBoxes.find(checkbox => checkbox.value === value).checked = checked
    onChange(checkBoxes)
  };


  return (
    <>
      {checkboxes.map(checkbox => (
        <CheckBox
          key={checkbox.value}
          size="large"
          color="white"
          disabled={false}
          loading={false}
          title={checkbox.label}
          checked={checkbox.checked}
          value={checkbox.value}
          onChange={changeHandler}
        />
      ))}
    </>
  )

};

export default checkBoxGroup;
