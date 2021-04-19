import {FC, useState } from "react";
import CheckBox from "components/lib/checkbox/checkbox";





export interface checkboxInterface {
  label: string;
  value: string | number;
  checked: boolean;
}

interface Props {
  onChange?: (newValue: any[]) => any;
  checkboxContent: checkboxInterface[]
}





const checkBoxGroup: FC<Props> = ({ onChange, checkboxContent}) => {      
  let localCheckboxContent = checkboxContent


  const changeHandler = ({checked, value}) => {
    localCheckboxContent.find(checkbox => checkbox.value === value).checked = checked
    onChange(localCheckboxContent)
  };


  return (
    <>
      {localCheckboxContent.map(checkbox => (
        <CheckBox
          width="100%"       
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
