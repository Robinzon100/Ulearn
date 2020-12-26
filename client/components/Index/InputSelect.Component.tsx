import React from 'react'
import { Search } from "react-feather";



import Input from "components/global_components/inputs/Input";
import SortingDropdown from "../sortingDropdown";


const InputSelectComponent = () => {
    return (
        <>
        <div className="main_content--input">
        <Input 
            color="white"
            size="large"
            type="text"
            placeHolder="მოძებნე სასურველი კურსი"
            icon={<Search size={22}/>}
            className=""
            width="100%"
            />

              <div className="main_content--selects">
                {/* <SortingDropdown type="date" /> */}
                <SortingDropdown type="rating" /> 
                <SortingDropdown type="time" />
              </div>
            </div>
        </>
    )
}


export default InputSelectComponent;