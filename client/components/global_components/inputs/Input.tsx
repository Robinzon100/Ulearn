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
  const {fontSize,padding,focusedPadding,paddingWithOutIcons,fontFamily} = useMemo(() => getInputSize(size), [size]);
  const { ...colors } = useMemo(() => getColors(color), [color]);

  return (
    <>
      <div
        className="input_container"
        style={
          disabled ? { cursor: "not-allowed", pointerEvents: "none" } : containerStyle
        }>
        {/* <label htmlFor=""></label> */}
        {icon && <span className="icon_base-style icon">{icon}</span>}
        <input
          disabled={disabled}
          type={type}
          onChange={onChange}
          value={value}
          className={`input_field ${className}`}
          placeholder={placeHolder}
          style={!icon ? { padding: `${paddingWithOutIcons}` } : style}
        />

        {iconRight && (
          <span
            className="icon_base-style iconRight"
            style={{ opacity: "70%" }}>
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
              font-family: ${fontFamily};
              font-size: ${fontSize};
              width: ${width};
              padding: ${padding};
              background: ${colors.defaultBg};
              border: ${colors.borderColor};
              box-sizing: border-box;
              border-radius: 8px;
              outline: none !important;
              transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
            }

            .input_field:disabled {
              color: ${colors.disabled};
              opacity: 50%;
            }

            .input_field:focus {
              box-shadow: ${colors.focusedShadow};
              background: ${colors.focusedBg};
              opacity: 100%;
              padding: ${focusedPadding};
            }

            .input_field::placeholder {
              opacity: 100%;
              color: ${colors.textColor};
            }

            .icon_base-style {
              position: absolute;
              justify-content: center;
              display: flex;
              align-items: center;
              z-index: 1;
              top: 50%;
              opacity: 70%;
            }

            .icon:disabled {
              color: ${colors.disabled};
              opacity: 50%;
            }
            .icon {
              color: ${colors.textColor};
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
