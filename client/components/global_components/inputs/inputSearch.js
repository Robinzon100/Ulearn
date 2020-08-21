import React from 'react'
import { Search } from 'react-feather';



export default function inputSearch({placeHolder}) {
    return (
     
        <div className="input_container">
                <input type="text" className="input_field-with-search input_styles paragraph-regular-Noto paragraph-small"
                    placeholder={placeHolder} />
            <Search className="search" size={22} />
        </div>
        
    )
}
