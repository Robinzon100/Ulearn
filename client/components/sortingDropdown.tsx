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
                    // width="11vw"
                    size="small"                 
                    placeHolder="რეიტინგი"
                    id={2}
                    options={SelectJson.SelectRatingsOptions}
                    onChange={handleSelectChange}
                    icon={<Star size={15}/>}
                    color="yellow"
                    loading={false}
                    disabled={false}

                />

            )}

            {type === "time" && (
                <Select
                    // width="13vw"
                    size="large"  
                    placeHolder="ხანგძლივობა"
                    id={3}
                    options={SelectJson.SelectTimeOptions}
                    onChange={handleSelectChange}
                    icon={<Clock size={15} />}
                    color="red"

                />
            )}
        </>
    );
};

export default SortingDropdown;
