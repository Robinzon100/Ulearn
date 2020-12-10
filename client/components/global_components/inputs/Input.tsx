import { useMemo } from "react";
import { InputInterface } from "components/global_components/inputs/Input.interface";
import { getInputSize, getColors } from "./style";

const Input: React.FC<InputInterface> = ({
    status,
    size,
    placeHolder,
    type,
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
    width
}) => {
    const { fontSize, padding, focusedPadding } = useMemo(() => getInputSize(size), [size])
    const { ...props } = useMemo(() => getColors(status), [status])
    return (
        <>
            
            <div className="input_container" style={disabled ? { cursor: "not-allowed", pointerEvents: "none" } : style} >
                {/* <label htmlFor=""></label> */}
                {icon && (
                    <span style={disabled ? { opacity: "30%" }:{ opacity: "70%" } } className="icon_base-style icon">
                        {icon}
                    </span>
                )}
                <input
                    disabled={disabled}
                    style={iconRight ? {padding:"1rem 1rem 1rem 1rem"} : style}
                    type={type}
                    onChange={onChange}
                    value={value}
                    className={`input_field ${className}`}
                    placeholder={placeHolder}
                    
                />

                {iconRight && (
                    <span
                        className="icon_base-style iconRight"
                        style={disabled ? { opacity: "30%" }:{ opacity: "70%" } } 
                    >
                        {iconRight}
                    </span>
                )}












            <style jsx>
                {`
            .input_container {
              position: relative;
              display: flex;
              align-items: center;
              width: ${width};
            }

            .input_field {
              font-size:${fontSize};
              width: ${width};
              padding: ${padding}; 
              background: ${props.defaultBg};
              border: ${props.borderColor};
              box-sizing: border-box;
              border-radius: 8px;
              outline: none !important;
              transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
            }


            .input_field:focus {
              box-shadow: ${props.focusedShadow};
              background: ${props.focusedBg};
              padding: ${focusedPadding};
            }
            .input_field::placeholder {
              background: ${props.defaultBg};
              opacity: 70%;
              color:${props.textColor}
            }

            .icon_base-style {
                position: absolute;
                justify-content: center;
                display: flex;
                align-items: center;
                z-index: 1;
                top: 50%;
                
              }
              .icon {
                color:${props.textColor};
                left: 0;
                transform: translate(50%, -50%);
              }
              .iconRight {
                right: 15px;
                transform: translate(-50%, -50%);
              }
           
              
          `}
                </style>
            </div>
        </>
    );
};

export default Input;
