import { useMemo, memo, useState, useEffect } from "react";
import { getCheckBoxSize } from "./checkbox.style";

import { CheckBoxInterface } from "./checkbox.interface";

import CheckBoxIcon from "./checkbox-icon";

const checkbox: React.FC<CheckBoxInterface> = ({
  width,
  checkBoxWidth,
  onClick,
  title,
  className,
  color,
  size,
  style,
  loading,
  icon,
  iconStyle,
  iconRight,
  disabled,
  checked,
}) => {
  const { padding, fontSize } = useMemo(() => getCheckBoxSize(size), [size]);
  const [selfChecked, setSelfChecked] = useState<boolean>(false);

  const changeHandle = () => {
    if(disabled) return;
    setSelfChecked(!selfChecked);
  };

  useEffect(() => {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);
  return (
    <>
      <div className={`checkbox-wrapper noselect ${className && className}`}>
        <label className={`checkbox-label ${checkBoxWidth && checkBoxWidth}`}>
          {!loading && (
            <CheckBoxIcon
              // disabled={disabled}
              checked={selfChecked}
            />
          )}
          <input
            type="checkbox"
            className="checkbox"
            checked={selfChecked}
            //   disabled={disabled}
            onChange={changeHandle}
          />
          <span className="checkbox-title">{title}</span>
        </label>
      </div>




      <style jsx>{`
        .checkbox-wrapper {
          position: relative;
          padding: ${padding};
          border-radius: 8px;
          width: ${width};
          background-color: white;
          cursor: pointer;
        }
        .checkbox-label {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: auto;
          cursor: pointer;
          opacity: 1;
          /* height: var(--checkbox-size);
    line-height: var(--checkbox-size); */
        }
        .checkbox {
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

        .checkbox-title {
          font-size: ${fontSize};
          font-family: var(--button-fontFamily);
        }
      `}</style>
    </>
  );
};
export default memo(checkbox);
