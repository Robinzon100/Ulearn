import React from "react";
import { Search } from "react-feather";

export default function inputSearch({id,placeHolder }) {
  return (
    <div className="input_container" key={id}>
      <input
        type="text"
        className="input_field-with-search input-shadow input-shadow-onFocus input_styles paragraph-regulars paragraph-small"
        placeholder={placeHolder}
      />

      <Search className="search" size={22} />
    </div>
  );
}
