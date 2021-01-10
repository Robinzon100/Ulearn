import {memo, useState, useEffect,FC } from "react";

import { getRadioSize,getRadioColor } from "./radio.style";
import { IRadio } from "./radio.interface";
import Loading from "components/loading/Loading";
import RadioIcon from "./radio-icon";

const radio:FC<IRadio> = ({
    width,
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
    onChange,
    name,
}) =>{
    const [selfChecked, setSelfChecked] = useState<boolean>(false);
    const [radioValue, setRadioValue] = useState("");

    const changeHandler = (value) => {
        if(disabled) return;
        setSelfChecked(!selfChecked);
        onChange(value)
    };
    
      useEffect(() => {
        if (checked === undefined) return;
        setSelfChecked(checked);
      }, [checked]);

    return (

      <div className={`radop-wrapper noselect ${className ? className : ""}`} style={style}>
      <label className={`radio-label`}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={selfChecked}
          onChange={() => changeHandler(value)}
          className="radio"
        />
        {loading && (
          <Loading  bgColor="black" padding={getRadioSize(size).padding}   />
        )}  
        <h1>{checked}</h1>

        <span className="radio-title">{!loading && title}</span>
            {/* <RadioIcon 
            checked={selfChecked} 
            iconPosition={getRadioSize(size).iconPosition}
            disabled={disabled}/> */}
        </label>



      

      <style jsx>{`
        .radio-label {
          opacity: ${disabled || loading ? 0.8 : 1};
          cursor: ${disabled || loading ? "not-allowed" : "pointer"};
          pointer-events: ${disabled || loading ? "none" : "auto" };
          position: relative;
          border-radius: 8px;
          box-shadow:${color ? getRadioColor(color).defaultShadow : "none"};
          padding: ${getRadioSize(size).padding};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: ${width && width};  
          border: none;
          background: ${color ? getRadioColor(color).bg : "none"};
          transition: all .2s ease;
        }

        .radio-label :disabled {
            box-shadow:none;
        }
         
        .radio-label:hover {
            box-shadow:${color ? getRadioColor(color).hoverShadow : "none"};
        }
        .radio {
          /* opacity: 0; */
          outline: none;
          position: absolute;
          width: 20px;
          height: 20px;
          margin: 0px;
          padding: 0px;
          /* z-index: -1; */
          background-color: transparent;
        }

        .radio-title {
          font-size: ${getRadioSize(size).fontSize};
          font-family: var(--button-fontFamily);
          color: ${color ? "var(--secondary-light-black)" : "var(--primary-white)"};
        }
        
      `}</style>
    </div>

    )
}


export default memo(radio);