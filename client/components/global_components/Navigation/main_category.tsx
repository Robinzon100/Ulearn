import React from "react";
import { ChevronRight } from "react-feather";
import NextLink  from 'components/utils/NextLink';



const Category = ({ handleFetchMainCategory,setIsMainCategoryChosen,id,name },props) => {
    
    return (
    <>
    <li
          key={props.key}
          className="list__main-category--item"
          onMouseEnter={() => {
            handleFetchMainCategory(id);
            setIsMainCategoryChosen(true)
          }}
          //   variants={MainCategoryChildren}
        >
          <div className="item-container">
            <div className="item-container__cube-text">
              <div className="cube"></div>
              <div className="text">
                <NextLink
                    route=""
                  className="list--items__links regular f-size-p6"
                >
                  {name}
                </NextLink>
              </div>
            </div>

            <div className="item-container__chevron">
              <ChevronRight size={25} />
            </div>
          </div>
        </li>
      
    </>
  );
};

export default Category;
