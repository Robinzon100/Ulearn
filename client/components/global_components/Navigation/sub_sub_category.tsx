import React from 'react'
import NextLink  from 'components/utils/NextLink';


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
                        <NextLink
                          route=""
                          className="list--items__links  regular paragraph-small"
                        >
                          {name}
                        </NextLink>
                      </div>
                    </div>

                    
                  </div>
                </li>
            
          
        
        </>
    )
}
export default sub__sub_category;