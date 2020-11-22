import React, { useState } from "react";
import { motion } from "framer-motion";

//! ─── IMPORTS ────────────────────────────────────────────────────────────────────
import Maincategory from "components/NavigationCategories/main_category";
import SubCategory from "components/NavigationCategories/sub_category";
import SubSubCategory from "components/NavigationCategories/sub_sub_category";
import MainCategories from "public/json/MainCategories.json";
import {
  MainCategoryToggleAnimation,
  MainCategoryChildren,
  MainCategoryLeftMoveAnimation,
  SubCategoryLeftMoveAnimation,
  SubSubCategoryLeftMoveAnimation,
} from "components/utils/framer/framerAnimation";
import {
  handleFetchMainCategory,
  handleFetchSubCategoryClick,
} from "components/utils/Category/CategoryFunctions";

const Category: React.FC = () => {
  //* აქ იქნება ყველა ისეთეი სტეიტი,რომელიც პასუხისმგებელია გახსნა/დახურვაზე
  //* და მსგავს პატარა რაღაცეებზე
  const [isMouseleftSubSubCategory, setIsMouseleftSubSubCategory] = useState(false);

  //* ესენი გვეხმარებიან დავარენდეროთ ის წამოღებული  კატეგორიის სახელები.
  //* ერთ Sub მეორე Sub_sub ისთვის
  const [rendersSubNames, setRendersSubNames] = useState([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState(false);

  //   const [isMouseLeftCategory, setIsMouseLeftCategory] = useState(true);

  //* ესენი JSON ობიექტებისთვის რომ შემომეკლო დასახელება,ამიტომ სტეიტშია
  const [mainCategories, setCategories] = useState(MainCategories.categories.main_categories);
  const [subCategories, setSubCategories] = useState(MainCategories.categories.sub_categories);
  const [subSubCategories, setSubSubCategories] = useState(MainCategories.categories.sub_sub_categories
  );

  return (
    <>
     
      <motion.ul
        className="list__main-category"
        onMouseEnter={() => setIsMouseleftSubSubCategory(false)}
        
        variants={MainCategoryLeftMoveAnimation}
        initial={{ left: "34rem" }}
        animate={isMainCategoryChosen && "left"}
      >
        {mainCategories.map((data) => (
          <Maincategory
            handleFetchMainCategory={() =>
              handleFetchMainCategory(
                data.id,
                subCategories,
                setRendersSubNames
              )
            }
            setIsMainCategoryChosen={setIsMainCategoryChosen}
            key={data.id}
            id={data.id}
            name={data.name}
          />
        ))}
      </motion.ul>
    
      <motion.ul
        className="list__sub-category"
        variants={SubCategoryLeftMoveAnimation}
        initial={{ left: "25rem", display: "none", opacity: 0 }}
        animate={isMainCategoryChosen && "left"}
      >
        {rendersSubNames &&
          rendersSubNames.map((data) => (
            <SubCategory
              handleFetchSubCategoryClick={() =>
                handleFetchSubCategoryClick(
                  data.id,
                  subSubCategories,
                  setRendersSubSubNames
                )
              }
              setIsSubCategoryChosen={setIsSubCategoryChosen}
              setIsMouseleftSubSubCategory={setIsMouseleftSubSubCategory}
              key={data.id}
              id={data.id}
              name={data.name}
            />
          ))}
      </motion.ul>

      {isMouseleftSubSubCategory && (
        <motion.ul
          className="list__sub-sub-category"
          variants={SubSubCategoryLeftMoveAnimation}
          initial={{ right: "7rem", display: "none", opacity: 0 }}
          animate={isSubCategoryChosen && "left"}
        >
          {rendersSubSubNames &&
            rendersSubSubNames.map((data) => (
              <SubSubCategory key={data.id} id={data.id} name={data.name} />
            ))}
        </motion.ul>
      )}
    </>
  );
};

export default Category;
