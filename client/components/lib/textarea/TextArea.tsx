import { IinputInterface } from "components/lib/inputs/Input.interface";
import { forwardRef, PropsWithChildren } from "react";
import { getColors } from "components/lib/inputs/inputs.style";




const TextArea = forwardRef<HTMLTextAreaElement, PropsWithChildren<IinputInterface>>(
  ({
    color,
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
    defaultValue,
    readonly,
    minHeight,
    maxHeight,
  }, ref: React.Ref<HTMLTextAreaElement | null>,) => {




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



          <textarea
            ref={ref}
            name={name}
            disabled={disabled}
            onChange={onChange}
            value={value}
            className={`input_field  ${className && className}`}
            placeholder={placeHolder}
            style={style}
            defaultValue={defaultValue}
            readOnly={readonly}
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
                width: ${width && width};
                outline: none !important;
              }

              .input_field {
                box-sizing: border-box;
                outline: none !important;
                resize: none !important;
                border: none !important;
                width: 100%;
                max-height:${maxHeight};
                height:100%;
                min-height:${minHeight};
                transition: all 0.1s cubic-bezier(0, 1.06, 0.37, 0.38);
              }

              .input_field:disabled {
                color: var(--primary-dark);
              }

              .input_field:hover {
                background: var(--secondary-light-grey);
              }

              .input_field:focus {
                background: var(--primary-white);
                opacity: 100%;
                padding: 0 0 0 2rem;
                box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.03), 
                0px 9px 23px -6px rgba(0, 0, 0, 0.1), 
                inset 0px -3px 8px -4px rgba(0, 0, 0, 0.1);
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
export default TextArea;
