import React from "react";

interface Props {
  childred?:any;
  onChange?:any,
//   value?:string | number
}

const checkBoxGroup = ({ children,onChange}) => {
  return (
    
    <div className="group">{children}</div>
    
  );
};

export default checkBoxGroup;
