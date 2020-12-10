import { useMemo } from "react";
import { InputInterface } from "components/global_components/inputs/Input.interface";
import { getInputSize, getColors } from "./style";

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
  options,
  iconStyle,
  width
}) => {
  
  const { fontSize, padding, focusedPadding } = useMemo(() => getInputSize(size), [size])
  const { ...props } = useMemo(() => getColors(color), [color])



  
  return (
    <>
      {/* //TODO გარრკვიე ფოკუსის დროს რომ შეიცვალოს აიკონის ოფასითი */}
      <div
        className="input_container"
        style={disabled ? { cursor: "not-allowed", pointerEvents: "none" } : style} >
        {/* <label htmlFor=""></label> */}
        {icon && (
          <span style={{ opacity: "70%" }} className="icon_base-style icon">
            {icon}
          </span>
        )}
        <input
          disabled={disabled}
          style={style}
          type={type}
          onChange={onChange}
          value={value}
          className={`input_field ${className}`}
          placeholder={placeHolder}
        />

        {iconRight && (
          <span
            className="icon_base-style iconRight"
            style={{ opacity: "70%" }}>
            {iconRight}
          </span>
        )}












        <style jsx> {`
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

          .input_field:disabled {
            color: ${props.disabled};
            opacity:50%;
          }

          .input_field:focus {
            box-shadow: ${props.focusedShadow};
            background: ${props.focusedBg};
            opacity: 100%;
            padding: ${focusedPadding};
          }


          .input_field::placeholder {
            background: ${props.defaultBg};
            opacity: 100%;
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

          .input_field:focus + .icon {
            opacity:10%;
          }

          .icon:disabled {
            color: ${props.disabled};
            opacity:50% ;
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
          `}</style>
      </div>
    </>
  );
};

export default Input;
