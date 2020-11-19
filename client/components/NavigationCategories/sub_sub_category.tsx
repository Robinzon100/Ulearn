import React from 'react'
import { ChevronRight } from "react-feather";


const sub__sub_category = ({id,name},props) =>  {
    return (
        <>
            {/* // SUB_SUB_CATEGORY */}
            <li
                  className="list__sub-category--item"
                  key={props.id}
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

                    
                  </div>
                </li>
             
          
        
        </>
    )
}
export default sub__sub_category;