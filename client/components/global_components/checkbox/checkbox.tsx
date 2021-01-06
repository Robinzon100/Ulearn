import { useMemo, memo, useState, useEffect } from "react";

import { getCheckBoxSize,getCheckBoxColor } from "./checkbox.style";
import { ICheckBox } from "./checkbox.interface";
import Loading from "components/loading/Loading";
import CheckBoxIcon from "./checkbox-icon";


const CheckBox: React.FC<ICheckBox> = ({
  width,
  checkBoxWidth,
  onClick,
  title,
  className,
  color,
  size,
  style,
  loading,
  iconStyle,
  disabled,
  checked,
  value,
  id,
  onChange
}) => {
  const { padding, fontSize,iconPosition } = useMemo(() => getCheckBoxSize(size), [size]);
  const {...checkBox } = useMemo(() => getCheckBoxColor(color), [color]);
  const [selfChecked, setSelfChecked] = useState<boolean>(false);
  const [selfVal, setSelfVal] = useState(value);
  


  const changeHandler = (e,value) => {
    if(disabled) return;
    setSelfChecked(!selfChecked);
    onChange({checked: e.target.checked, value: selfVal})
  };



  useEffect(() => {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);


  


  return (
    <>
      <div className={`checkbox-wrapper noselect ${className ? className : ""}`} data-is-open={'state'} style={style}>
        <label className={`checkbox-label ${checkBoxWidth ? checkBoxWidth : ""}`}>
          {!loading && (
            <CheckBoxIcon iconPosition={iconPosition} disabled={disabled} checked={selfChecked}/>
          )}
          <input
            type="checkbox"
            className="checkbox"
            checked={selfChecked}
            disabled={disabled}
            onChange={(e) => changeHandler(e,value)}
            value={selfVal}
          />
          {loading && (
          <Loading bgColor={color == 'white' ? 'black' : checkBox.textColor} padding={padding} />
            )}
          <span className="checkbox-title">{!loading && title}</span>
        </label>
      </div>




      <style jsx>{`

        .checkbox-label {
          opacity: ${disabled || loading ? 0.8 : 1};
          cursor: ${disabled || loading ? "not-allowed" : "pointer"};
          pointerEvents: ${disabled || loading ? "none" : "auto" };
          position: relative;
          border-radius: 8px;
          box-shadow:${checkBox.defaultShadow};
          padding: ${padding};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: ${width && width};
          border: ${checkBox.border};
          background: ${color === "white" ?  checkBox.bg : "var(--primary-white)"};
          transition: all .2s ease;
        }

        .checkbox-label :disabled {
            box-shadow:none;
        }
         
        .checkbox-label:hover {
            box-shadow:${checkBox.hoverShadow};
        }
        .checkbox-label:active {
            box-shadow:${checkBox.activeShadow};
        }
        .checkbox {
          opacity: 0;
          outline: none;
          position: absolute;
          width: 0px;
          height: 0px;
          margin: 0px;
          padding: 0px;
          z-index: -1;
          background-color: transparent;
        }

        .checkbox-title {
          font-size: ${fontSize};
          font-family: var(--button-fontFamily);
          color: ${color === "red" ? checkBox.textColor : "var(--secondary-light-black)"};
        }
      `}</style>
    </>
  );
};


//TODO გაარკვიე როგორ მუშაობს Group
// type CheckboxComponent<P = {}> = React.FC<P> & {
//     Group: typeof CheckBoxGroup;
// }

export default CheckBox;
