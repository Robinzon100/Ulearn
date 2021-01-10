import { FC, useState } from "react";
import Radio from "components/global_components/radio/radio";
interface radio {
  label: string;
  value: string | number;
  name: any;
  key:number
}
interface Props {
  onChange:(value:string | number) => any;
  radios?: radio[];
}

const radioGroup: FC<Props> = ({ onChange, radios}) => {
  const [radioCheck, setRadioCheck] = useState(radios);
  const [initialValue, setInitialValue] = useState<any>("");

  const changeHandler = (value) => {
    // debugger
    setInitialValue(value)
    onChange(value);
  };
  return (
    <div >
      {radioCheck.map((radio) => (
        <Radio
          //   width="15vw"
          onChange={() => changeHandler(radio.value)}
          key={radio.key}
          name={radio.name}
          size="large"
          color="white"
          title={radio.label}
          value={radio.value}
          checked={initialValue === radio.value}
          />
      ))}
      {/* <h1>{initialValue}</h1> */}
    </div>
  );
};

export default radioGroup;
