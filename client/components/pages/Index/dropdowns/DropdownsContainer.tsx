
import { Search } from "react-feather";

import Input from "components/lib/inputs/Input";
import SortingDropdown from "./Dropdowns";


const DropdownsContainer = () => {
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


export default DropdownsContainer;