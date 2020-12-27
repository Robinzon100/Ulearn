import React, { memo, useMemo, useState } from "react";
import { motion } from "framer-motion";

// ============== OUR imports
import {handleToggle,handleMouseLeave} from "../../../function/CustomeSelecHook";
import { dropDownAnimation } from "constants/framer/framerAnimation";
import { SelectInterface } from "./select.inteface";
import Stars from "components/global_components/svg/Stars";
import Input from "components/global_components/inputs/Input";
import { getInputSize, getColors } from "../inputs/inputs.style";


const selectInput: React.FC<SelectInterface> = ({
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
    icon,
    iconRight,
    iconStyle,
    width,
    options,
    dropDownClassName,
    dropDownStyle
}) => {
    
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

  const { ...fillColors } = useMemo(() => getColors(color), [color]);

  return (
    <>
      <div className={`select ${className && className}`}
        style={disabled ? { cursor: "not-allowed", pointerEvents: "none" } : containerStyle}>
        {icon && (
          <div className="select_icon" style={iconStyle}>
            {icon}
          </div>
        )}
        <div className="dropdown" key={id} onClick={() => handleToggle(setIsToggle, setMouseLeave)}>
          <div className="dropdown-select">
            <span className="select regular paragraph-small">
              {selectLable}
            </span>
          </div>
          {mouseLeave && (
            <motion.div
              //   onMouseLeave={() => handleMouseLeave(setIsToggle, setMouseLeave)}
              className="dropdown-list"
              variants={dropDownAnimation}
              initial={{ height: "0rem", display: "none" }}
              animate={isToggle ? "open" : "closed"}
            >
              {options.map((option) => (
                <div className="item" key={option.id}>
                  <input
                    id={option.value}
                    value={option.id}
                    onChange={handleSelect}
                    checked={selectLable == option.value}
                    type={type}
                    className="radio"
                  />
                  <label className="regular paragraph-smallest" htmlFor={option.value}>
                    {option.value}

                    {/* {placeHolder === "რეიტინგი" && (
                      <Stars StarWidth={16} numberOfStars={option.reiting} />
                    )} */}
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {iconRight && (
          <div className="select_icon" style={iconStyle}>
            {iconRight}
          </div>
        )}

       
      </div>
      <style jsx>
          {`
            .select {
              width: 10vw;
              border-radius: 8px;
              cursor: pointer;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .select .select_icon {
              width: 5rem;
              left: 0;
              position: absolute;
              z-index: 1;
              height: 100%;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 60%;
            }
        `}
        </style>
    </>
  );
};

export default memo(selectInput);
