import { FC } from "react";

import CheckBox from "components/global_components/checkbox/checkbox";
import { ICheckBox } from "./checkbox.interface";
interface Props {
  children: (CheckBox: FC<ICheckBox>) => JSX.Element;
  name?: string;
  value?: any[];
  onChange: (newValue: any[]) => any;
}

const checkBoxGroup: FC<Props> = ({ children, onChange, value, name }) => {
  return <div className="group">{<CheckBox onChange={onChange} />}</div>;
};

export default checkBoxGroup;
