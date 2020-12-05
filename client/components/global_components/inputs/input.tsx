import { CSSProperties, ReactNode } from "react";

interface InputInterface {
  placeHolder: string;
  type: "text" | "email" | "password" | "number";
  disabled?: boolean;
  style?: CSSProperties;
  containerStyle?: any;
  value?: string;
  onChange?: any;
  title?: string;
  className?: string;
  id?: string;
  name?: string;
  icon?: ReactNode;
}
const Input: React.FC<InputInterface> = ({
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
}) => {
  return (
    <>
      <div className="input_container" title={title}>
        {/* <label htmlFor=""></label> */}
        {icon && (
          <span style={{ opacity: "80%" }} className="icon_base-style icon">
            {icon}
           
          </span>
        )}
        <input
          disabled={disabled}
          style={style}
          type={type}
          onChange={onChange}
          value={value}
          className={`input_field  paragraph-regulars paragraph-small ${className}`}
          placeholder={placeHolder}
        />
         
         <style jsx>{`
              .icon_base-style {
                position: absolute;
                justify-content: center;
                display: flex;
                align-items: center;
                z-index: 1;
                top: 50%;
              }

              .icon {
                left: 0;
                transform: translate(50%, -50%);
              }

              .input_container {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
            }

            .input_field {
              width: 100%;
              padding: 1rem 1rem 1rem 4rem;
              background: var(--primary-grey);
              border: none !important;
              box-sizing: border-box;
              border-radius: 8px;
              outline: none !important;
              transition: $transition !important;
            }

            .input_field:focus {
              border: 0.9px solid var(--secondary-light-grey);
              box-shadow: var(--input-onFocus);
              background: var(--white);
              opacity: 100%;
              padding: 1rem 1rem 1rem 4.5rem;
            }
            .input_field:placeholder {
              border: 0.9px solid var(--secondary-light-grey);
              box-shadow: var(--input-onFocus);
              background: var(--white);
              opacity: 100%;
            }
            `}
            </style>
      </div>
    </>
  );
};

export default Input;
