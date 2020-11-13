import React, { useState } from "react";
import { motion } from "framer-motion";

// ============== FRAMER-ANIMATION
import {arrowAnimation,dropDownAnimation} from "components/utils/framer/framerAnimation";

interface selects {
    id: number,
    onChange: any,
    selectOptions:any,
    type:string
}

const selectInput: React.FC<selects> = ({ id, onChange,selectOptions,type }) => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle((toggle) => !toggle);
    };

    
    const [selectLable, setSelectLable] = useState<string>("ხანგძლივობა")
    
    const handleSelect = ({currentTarget: {id, value}}) => {
        onChange(value)
        setSelectLable(id)
        setIsToggle(false);
    }
    
    return (
        <>
        <div className={type === "sorting_date" ? "sorting__video-date" : 
        type === "sorting_raiting" ? "sorting__video-raiting" : 
        type === "sorting_length" ? "sorting__video-length"  : 
        null }
        >
            <div className="dropdown input-shadow input-shadow-onFocus" 
            key={id} 
            onClick={handleToggle}>
                <div className="dropdown-select">
                    <span className="select paragraph-regulars paragraph-small">
                        {selectLable}
                    </span>
                    
                </div>
                <motion.div
                    className="dropdown-list"
                    variants={dropDownAnimation}
                    initial={{ height: "0rem" }}
                    animate={isToggle ? "open" : "closed"}
                    >
                        
                        {selectOptions.map(option => (
                        
                            <div className="dropdown-list__item" key={option.id}>
                                <input
                                    id={option.name}
                                    value={option.id}
                                    onChange={handleSelect}
                                    checked={selectLable == option.name}
                                    type="radio"
                                    className="radio"/>
                                <label
                                    className="paragraph-regulars paragraph-smallest"
                                    htmlFor={option.name}>
                                    {option.name}
                                </label>
                            </div>
                    ))}
                </motion.div>
            </div>
            </div>
        </>
    );
}


export default selectInput;