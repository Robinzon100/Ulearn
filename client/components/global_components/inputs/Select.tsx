import React, { useState } from "react";
import { motion } from "framer-motion";

// ============== FRAMER-ANIMATION
import {dropDownAnimation} from "constants/framer/framerAnimation";
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
  options,
  iconStyle
}) => {
  const [isToggle, setIsToggle] = useState(false);


  const [selectLable, setSelectLable] = useState<string>(placeHolder);

  const handleSelect = ({ currentTarget: { id, value } }) => {
    // debugger
    onChange(value);
    setSelectLable(id);
    // if(value === selectLable) {
    //     setIsToggle(true);
    // }
    setIsToggle(false);
  };

  return (
    <>
      <div className="Select__input">
        
        {/* //TODO როცა იმავე მნიშვნელობას აჭერ მაინც აკეთებს ანიმაციას. გააკეთე */}
        {icon && (
          <div className="input_icon" style={iconStyle}>
            {icon}
          </div>
        )}
        <div className="dropdown" key={id} onClick={() => setIsToggle((toggle) => !toggle)}>
          <div className="dropdown-select">
            <span className="select regular paragraph-small">
              {selectLable}
            </span>
          </div>
          <motion.div
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
                  
                  {/* //TODO რეიტინგზე გააკეთე */}
                  {/* <Stars StarWidth={16} numberOfStars={option.star}/> */}
                </label>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default selectInput;
