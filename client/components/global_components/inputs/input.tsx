import React, {CSSProperties} from "react";

interface textInput {
  placeHolder: string,
  type: 'text' | 'email' | 'password' | 'number',
  disabled?: boolean,
  style?: CSSProperties,
  containerStyle?: any,
  value?: string,
  onChange?: any,
  title?: string,
  className?: string,
  id?: string,
  name?: string,
}
const Input: React.FC<textInput> = ({ placeHolder, type, disabled, style, containerStyle, value, onChange, title, className, id, name }) => {
  return (
    <>
      <div
        className="input_container"
        title={title}>
          {/* <label htmlFor=""></label> */}
        <input
          disabled={disabled}
          style={style}
          type={type}
          onChange={onChange}
          value={value}
          className={`input_field input-shadow input-shadow-onFocus input_styles paragraph-regulars paragraph-small ${className}`}
          placeholder={placeHolder} />
      </div>
    </>
  );
}



export default Input