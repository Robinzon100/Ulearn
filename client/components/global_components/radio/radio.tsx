import { useMemo, memo, useState, useEffect,FC } from "react";

import { getRadioSize,getRadioColor } from "./ratio.style";
import { IRadio } from "./radio.interface";
import Loading from "components/loading/Loading";
import RadioIcon from "./radio-icon";

const radio:FC<IRadio> = ({
    width,
    radioWidth,
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
    id
}) =>{
    const { padding, fontSize,iconPosition } = useMemo(() => getRadioSize(size), [size]);
    const {...radio } = useMemo(() => getRadioColor(color), [color]);
    const [selfChecked, setSelfChecked] = useState<boolean>(false);

    const changeHandler = () => {
        if(disabled) return;
        setSelfChecked(!selfChecked);
      };
    
      useEffect(() => {
        if (checked === undefined) return;
        setSelfChecked(checked);
      }, [checked]);

    return (

      <div className={`radop-wrapper noselect ${className ? className : ""}`} style={style}>
      <label className={`radio-label ${radioWidth ? radioWidth : ""}`}>
        <input
          type="radio"
          value={value}
          checked={selfChecked}
          onChange={changeHandler}
          className="radio"
        />
        {loading && (
          <Loading bgColor={color == 'white' ? 'black' : radio.textColor} padding={padding} />
        )}

        <span className="radio-title">
          {!loading && title}
        </span>
            <RadioIcon checked={selfChecked} iconPosition={iconPosition} disabled={disabled}/>
      </label>

      <style jsx>{`
        .radio-label {
          opacity: ${disabled || loading ? 0.8 : 1};
          cursor: ${disabled || loading ? "not-allowed" : "pointer"};
          pointer-events: ${disabled || loading ? "none" : "auto" };
          position: relative;
          border-radius: 8px;
          box-shadow:${radio.defaultShadow};
          padding: ${padding};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: ${width && width};  
          border: ${radio.border};
          background: ${color === "white" ?  radio.bg : "var(--primary-white)"};
          transition: all .2s ease;
        }

        .radio-label :disabled {
            box-shadow:none;
        }
         
        .radio-label:hover {
            box-shadow:${radio.hoverShadow};
        }
        .radio-label:active {
            box-shadow:${radio.activeShadow};
        }
        .radio {
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

        .radio-title {
          font-size: ${fontSize};
          font-family: var(--button-fontFamily);
          color: ${color === "red" ? radio.textColor : "var(--secondary-light-black)"};
        }
        
      `}</style>
    </div>

    )
}


export default radio;