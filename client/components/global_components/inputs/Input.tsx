import { useMemo } from "react";
import { InputInterface } from "components/global_components/inputs/Input.interface";
import { getInputSize, getColors } from "./inputs.style";

const Input: React.FC<InputInterface> = ({
  color,
  type,
  size,
  placeHolder,
  disabled,
  style,
  containerStyle,
  value,
  onChange,
  title,
  className,
  id,
  name,
  icon,
  iconRight,
  iconStyle,
  width,
}) => {
  const {fontSize,padding,focusedPadding,paddingWithOutIcons} = useMemo(() => getInputSize(size), [size]);
  const { ...fillColors } = useMemo(() => getColors(color), [color]);

  return (
    <>
      <div
        className="input_container"
        style={disabled ? { cursor: "not-allowed", pointerEvents: "none" } : containerStyle}>
        
        {icon && <span className="icon_base-style icon">{icon}</span>}
        <input
          name={name}
          disabled={disabled}
          type={type}
          onChange={onChange}
          value={value}
          className={`input_field ${className && className}`}
          placeholder={placeHolder}
          style={!icon ? { padding: `${paddingWithOutIcons}` } : style}
        />

        { iconRight && (
          <span className="icon_base-style iconRight" style={{ opacity: "70%" }}>
            {iconRight}
          </span>
        )}





        <style jsx>
          {`
            .input_container {
              width: ${width && width};
              position: relative;
              display: flex;
              align-items: center;
              border-radius: 8px;
              border: ${fillColors.borderColor};
              background: ${color === "white" ?  fillColors.defaultBg : "var(--white)"};
              transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
              outline: none !important;
            }

            .input_field {
              font-family: var(--regular);
              font-size: ${fontSize};
              padding: ${padding};
              background: ${color === "white" ?  fillColors.defaultBg : "var(--white)"};
              box-sizing: border-box;
              border-radius: 8px; 
              outline: none !important;
              transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
              border:none;
              width:100%;
            }

            .input_field:disabled {
              color: var(--primary-grey);
              opacity: 50%;
            }
            .input_container:focus-within  {
                background-color:var(--white);
                box-shadow: var(--text-input-shadow);
                
            }
            
            .input_container:hover {
                background: var(--primary-grey);
            }
           
            .input_container:hover .input_field {
                background: var(--primary-grey);
            }

            .input_field:focus {
              background:var(--white);
              opacity: 100%;
              padding: ${focusedPadding};
            }
            .input_field:focus::placeholder {
                opacity: 100%;
                font-weigth:600;
            }
          

            .input_field::placeholder {
              opacity: 70%;
              color: ${color === "red" ?  fillColors.textColor : "var(--secondary-light-black)"};
            }

            .icon_base-style {
              justify-content: center;
              display: flex;
              align-items: center;
              z-index: 1;
              opacity: 70%;
              padding:0px 15px;
            }
            
            .icon:disabled {
              color: var(--primary-grey);
              opacity: 50%;
            }
            .icon,.iconRight {
              color:${color === "red" ? "red" : "var(--secondary-light-dark)"} ;

            }

          `}
        </style>
      </div>
    </>
  );
};

export default Input;
