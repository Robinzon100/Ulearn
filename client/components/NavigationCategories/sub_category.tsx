import React from 'react'
import { ChevronRight } from "react-feather";


const sub_category = ({handleFetchSubCategoryClick,setIsSubCategoryChosen,setIsMouseleftCategory,id,name},props) =>  {
    return (
        <>
            {/* // SUB_CATEGORY */}
            
            <li
                key={props.key}
                  className="list__sub-sub-category--item"
                  onMouseEnter={() => {
                    handleFetchSubCategoryClick(id);
                    setIsSubCategoryChosen(true)
                    setIsMouseleftCategory(true)
                  }}
                  
                >
                  <div className="item-container">
                    <div className="item-container__cube-text">
                      
                      <div className="text">
                        <a
                          href="#"
                          className="list--items__links paragraph-regulars paragraph-small"
                        >
                          {name}
                        </a>
                      </div>
                    </div>

                    <div className="item-container__chevron">
                      <ChevronRight size={25} />
                    </div>
                  </div>
                </li>
             
        
        </>
    )
}
export default sub_category;