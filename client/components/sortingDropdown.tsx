import React from "react";
import { Calendar, Clock, Star } from "react-feather";

import Select from "components/global_components/select/select";
import SelectJson from "../public/json/Select.json";
interface SortingDropdown {
    type: string;
}

const SortingDropdown: React.FC<SortingDropdown> = ({ type }) => {
    const handleSelectChange = (value) => {
        console.log(value);
    };



    return (
        <>
            {/* {type === "date" && (
        <Input
          id={1}
          type="sorting_date"
          selectOptions={selectOptions}
          onChange={handleSelectChange}
        >
          <div
            className="input_icon"
            style={{ backgroundColor: "var(--primary-blue)" }}
          >
            <Calendar size={15} style={{ color: "blue", opacity: "1" }} />
          </div>
        </Input>
      )} */}

            {type === "rating" && (
                <Select
                    size="small"                 
                    placeHolder="რეიტინგი"
                    id={2}
                    type="radio"
                    options={SelectJson.SelectRatingsOptions}
                    onChange={handleSelectChange}
                    icon={<Star size={15}/>}
                    iconStyle={{ color: "yellow", opacity: "70%",backgroundColor:"var(--primary-yellow)" }}
                />

            )}

            {type === "time" && (
                <Select
                    size="small"  
                    placeHolder="ხანგძლივობა"
                    id={3}
                    type="radio"
                    options={SelectJson.SelectTimeOptions}
                    onChange={handleSelectChange}
                    icon={<Clock size={15} />}
                    iconStyle={{ color: "red", opacity: "70%",backgroundColor:"var(--primary-red)" }}

                />
            )}
        </>
    );
};

export default SortingDropdown;
