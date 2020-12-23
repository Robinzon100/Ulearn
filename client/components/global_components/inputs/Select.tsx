import React, { useState } from "react";
import { motion } from "framer-motion";

// ============== OUR imports
import {handleToggle,handleMouseLeave} from "../../../function/CustomeSelecHook";
import { dropDownAnimation } from "constants/framer/framerAnimation";
import { InputInterface } from "components/global_components/inputs/Input.interface";
import Stars from "components/global_components/svg/Stars";

const selectInput: React.FC<InputInterface> = ({
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
  options,
  iconStyle,
}) => {
  const [mouseLeave, setMouseLeave] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [selectLable, setSelectLable] = useState<string>(placeHolder);

  const handleSelect = ({ currentTarget: { id, value } }) => {
    //   debugger
    onChange(value);
    setSelectLable(id);
    setIsToggle(false);
    setMouseLeave(false);
  };
  
  return (
    <>
      <div className="Select__input"
      style={
        disabled ? { cursor: "not-allowed", pointerEvents: "none" } : containerStyle
      }>
       {icon && (
          <div className="input_icon" style={iconStyle}>
            {icon}
          </div>
        )}
        <div className="dropdown" 
        key={id} 
        onClick={() => handleToggle(setIsToggle,setMouseLeave)} 
        >
          <div className="dropdown-select">
            <span className="select regular paragraph-small">
              {selectLable}
            </span>
          </div>
          {mouseLeave && (
            <motion.div
             onMouseLeave={() => handleMouseLeave(setIsToggle,setMouseLeave)}
             className="dropdown-list"
             variants={dropDownAnimation}
             initial={{ height: "0rem", display: "none" }}
             animate={isToggle ? "open" : "closed"}
            >
              {options.map((option) => (
                <div className="dropdown-list__item" key={option.id}>
                  <input
                    id={option.value}
                    value={option.id}
                    onChange={handleSelect}
                    checked={selectLable == option.value}
                    type={type}
                    className="radio"
                  />
                  <label
                    className="regular paragraph-smallest"
                    htmlFor={option.value}
                  >
                    {option.value}

                    {placeHolder === "რეიტინგი" && 
                        <Stars StarWidth={16} numberOfStars={option.reiting}/> 
                    }
                   
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {iconRight && (
          <div className="input_icon" style={iconStyle}>
            {iconRight}
          </div>
        )}
      </div>
    </>
  );
};

export default selectInput;
