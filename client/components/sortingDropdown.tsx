import React, { useState, useEffect } from "react";
import { Calendar,Clock } from "react-feather";
import SelectInput from "components/global_components/inputs/selectInput";

interface SortingDropdown {
  type: string;
}

const SortingDropdown: React.FC<SortingDropdown> = ({ type }) => {
  const handleSelectChange = (value) => {
    console.log(value);
  };

  const selectOptions = [
    {
      id: 1,
      name: "0-2 Hours",
      number_of_courses: "100",
    },
    {
      id: 2,
      name: "3-6 Hours",
      number_of_courses: "12",
    },
    {
      id: 3,
      name: "7-16 Hours",
      number_of_courses: "20",
    },
  ];

  return (
    <>
      {type === "date" && (
        <SelectInput
          id={1}
          type="sorting_date"
          selectOptions={selectOptions}
          onChange={handleSelectChange}
        >
          {/* <div className="input_"></div> */}
        </SelectInput>
      )}

      {type === "raiting" && (
        <SelectInput
          id={2}
          type="sorting_raiting"
          selectOptions={selectOptions}
          onChange={handleSelectChange}
        />
      )}

      {type === "time" && (
        <SelectInput
          id={3}
          type="sorting_length"
          selectOptions={selectOptions}
          onChange={handleSelectChange}
        >
          <div className="input_icon">
            <Clock />
          </div>
        </SelectInput>
      )}
    </>
  );
};

export default SortingDropdown;
