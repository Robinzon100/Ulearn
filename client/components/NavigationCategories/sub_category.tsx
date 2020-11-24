import React from 'react'
import { ChevronRight } from "react-feather";
import { NextLink } from 'components/utils/NextLink';


const sub_category = ({handleFetchSubCategoryClick,setIsSubCategoryChosen,setIsMouseleftSubSubCategory,rendersSubSubNames,id,name},props) =>  {
    return (
        <>
            {/* // SUB_CATEGORY */}
            
            <li
                key={props.key}
                  className="list__sub-sub-category--item"
                  onMouseEnter={() => {
                    handleFetchSubCategoryClick(id);
                    setIsSubCategoryChosen(true)
                    setIsMouseleftSubSubCategory(true)
                  }}
                  
                >
                  <div className="item-container">
                    <div className="item-container__cube-text">
                      
                      <div className="text">
                        <NextLink
                          route="#"
                          className="list--items__links  paragraph-regulars-bold paragraph-small"
                        >
                          {name}
                        </NextLink>
                      </div>
                    </div>

                    {/* {rendersSubSubNames.length > 0 &&
                    
                    } */}
                    <div className="item-container__chevron">
                      <ChevronRight size={25} />
                    </div>
                  </div>
                </li>
             
        
        </>
    )
}
export default sub_category;