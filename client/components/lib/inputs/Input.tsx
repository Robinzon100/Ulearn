import { IinputInterface } from "components/lib/inputs/Input.interface";
import { forwardRef, PropsWithChildren } from "react";
import { getInputSize, getColors } from "./inputs.style";




const Input = forwardRef<HTMLInputElement,PropsWithChildren<IinputInterface>>(
  ({
    color,
    type,
    size,
    placeHolder,
    disabled,
    style,
    containerStyle,
    value,
    onChange,
    className,
    name,
    icon,
    iconRight,
    width,
  },ref: React.Ref<HTMLInputElement | null>,) => {





    
    return (
      <>
        <div
          className="input_container"
          style={
            disabled
              ? { cursor: "not-allowed", pointerEvents: "none" }
              : containerStyle
          }>
          {icon && <span className="icon_base-style icon">{icon}</span>}

          <input
            ref={ref}
            name={name}
            disabled={disabled}
            type={type}
            onChange={onChange}
            value={value}
            className={`input_field  ${className && className}`}
            placeholder={placeHolder}
            style={
              !icon ? { padding: `${getInputSize(size).paddingWithOutIcons}` } : style
            }
          />

          {iconRight && (
            <span
              className="icon_base-style iconRight"
              style={{ opacity: "70%", right: 0 }}>
              {iconRight}
            </span>
          )}

          <style jsx>
            {`
              .input_container {
                box-sizing: border-box;
                position: relative;
                display: flex;
                align-items: center;
                border-radius: 8px;
                background: ${color === "white"
                  ? getColors(color).defaultBg
                  : "var(--primary-white)"};
                width: ${width && width};
                outline: none !important;
              }

              .input_field {
                border: ${getColors(color).borderColor};
                font-size: ${getInputSize(size).fontSize};
                padding: ${getInputSize(size).padding};
                background: ${color === "white"
                  ? getColors(color).defaultBg
                  : "var(--primary-white)"};
                box-sizing: border-box;
                border-radius: 8px;
                outline: none !important;
                width: 100%;
                transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
              }

              .input_field:disabled {
                color: var(--primary-grey);
                opacity: 50%;
              }

              .input_container:hover {
                background: var(--primary-grey);
              }
              .input_field:hover {
                background: var(--primary-grey);
              }

              .input_field:focus {
                background: var(--primary-white);
                border: ${getColors(color).focusedBorder};
                opacity: 100%;
                padding: ${getInputSize(size).focusedPadding};
              }

              .input_field:focus::placeholder {
                opacity: 100%;
              }

              .input_field::placeholder {
                opacity: 100%;
                color: ${color === "red"
                  ? getColors(color).textColor
                  : "var(--secondary-light-black)"};
              }

              .icon_base-style {
                position: absolute;
                justify-content: center;
                display: flex;
                align-items: center;
                z-index: 1;
                opacity: 70%;
                padding: 0px 15px;
              }

              .icon:disabled {
                color: var(--primary-grey);
                opacity: 50%;
              }

              .icon,
              .iconRight {
                color: ${color === "red"
                  ? "red"
                  : "var(--secondary-light-dark)"};
              }
            `}
          </style>
        </div>
      </>
    )
  }
);
export default Input;
