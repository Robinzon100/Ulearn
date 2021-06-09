import { memo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";
import { forwardRef, PropsWithChildren } from "react";





// ============== OUR imports
import {handleToggle,handleMouseLeave} from "../../../function/CustomeSelecHook";
import { dropDownAnimation } from "components/lib/framer/framerAnimation";
import { ISelect } from "./select.inteface";
import { getSelectSize, getSelectColors } from "./select.style";
import Loading from "components/lib/loading/Loading";


const selectInput = forwardRef<HTMLInputElement, PropsWithChildren<ISelect>> (
    ({
  color,
  size,
  placeHolder,
  disabled,
  style,
//   value,
  onChange,
  className,
  id,
  icon,
  iconStyle,
  width,
  options,
  loading,
  maxWidth,
  minWidth
 },ref: React.Ref<HTMLInputElement | null>,) => {
  const [mouseLeave, setMouseLeave] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [selectLable, setSelectLable] = useState<string>(placeHolder);

  const handleSelect = ({ currentTarget: { id, value } }) => {
    // debugger
    onChange(value);
    setSelectLable(id);
    setIsToggle(false);
    setMouseLeave(false);
  };

  return (
    <>
      <div
        onMouseLeave={() => handleMouseLeave(setIsToggle, setMouseLeave)}
        onClick={() => handleToggle(setIsToggle, setMouseLeave)}
        className={`select noselect ${className ? className : ""}`}
        style={disabled ? { cursor: "not-allowed", pointerEvents: "none" } : style}>
        <div className="dropdown" key={id}>

          <div className="dropdown-select">
            {icon && (
              <div className="select_icon" style={iconStyle}>
                {icon}
              </div>
            )}

            <span className="selectable regular f-size-p6">
              {!loading && selectLable}
            </span>

            {loading && (
              <Loading
                bgColor={color == "white"? "black": getSelectColors(color).iconBgColor}
                style={{ margin: "0vw 1.5vw" }}
              />
            )}

            <div className="dropdown_icon" style={{ opacity: "70%",marginTop:"3%" }}>
              <ChevronDown />
            </div>
          </div>


          {mouseLeave && (
            <motion.div
              className="dropdown-list"
              variants={dropDownAnimation}
              initial={{ height: "0rem", display: "none" }}
              animate={isToggle ? "open" : "closed"}>
              {options.map((option) => (
                <div className="item" key={option.id}>
                  <input
                    key={id}
                    ref={ref}
                    id={option.value}
                    value={option.id}
                    onChange={handleSelect}
                    checked={selectLable === option.value}
                    type="radio"
                    className="radio"
                  />
                  <label className="f-size-p7" htmlFor={option.value}>
                    {option.value}
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>




      <style jsx>
        {`
          .select {
            width: ${width ? width : ""};
            border-radius: 8px;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            background: var(--primary-grey);
            cursor: ${disabled || loading ? "not-allowed" : "pointer"};
            pointerevents: ${disabled || loading ? "none" : "auto"};
            opacity: ${disabled || loading ? "60%" : "100%"};
            max-width:${maxWidth};
            min-width:${minWidth};
          }
          .select_icon {
            padding: ${getSelectSize(size).iconPadding};
            left: 0;
            z-index: 1;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${getSelectColors(color).iconBgColor};
            color: white;
            box-shadow: ${getSelectColors(color).boxShadow}
            // 0px 4px 11px rgba(255, 92, 77, 0.47);
          }
          .selectable {
            margin: 0vw 1.5rem;
          }
          .dropdown {
            padding: ${getSelectSize(size).padding};
            width: 100%;
            position: relative;
            background-origin: padding-box;
            box-sizing: border-box;
            border-radius: 8px;
            border: none;
          }

          .dropdown-select {
            padding: 8px;
            position: relative;
            border-radius: 8px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 1s ease;
          }
        `}
      </style>
    </>
  );
}
);
export default memo(selectInput);
