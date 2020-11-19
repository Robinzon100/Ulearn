import React from "react";
import { ChevronRight } from "react-feather";
import { motion } from "framer-motion";


const Category = ({ handleFetchMainCategory,setIsMainCategoryChosen,id,name },props) => {
    

  return (
    <>
    <li
          key={props.key}
          className="list__main-category--item"
          onClick={(e) => {
            handleFetchMainCategory(id, e);
            setIsMainCategoryChosen(true)
          }}
          //   variants={MainCategoryChildren}
        >
          <div className="item-container">
            <div className="item-container__cube-text">
              <div className="cube"></div>
              <div className="text">
                <a
                //   href="#"
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
  );
};

export default Category;
