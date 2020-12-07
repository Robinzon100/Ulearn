import React from 'react'
import { Search } from "react-feather";



import Input from "components/global_components/inputs/Input";
import SortingDropdown from "../sortingDropdown";


const InputSelectComponent = () => {
    return (
        <>
        <div className="main_content--input">
            <Input 
            type={"text"} 
            placeHolder={"მოძებნე სასურველი კურსი"} 
            icon={<Search size={22}/>}
            className={"paragraph-regulars paragraph-small"}
            />

              <div className="Select">
                {/* <SortingDropdown type="date" /> */}
                <SortingDropdown type="rating" /> 
                <SortingDropdown type="time" />
              </div>
            </div>
        </>
    )
}


export default InputSelectComponent;