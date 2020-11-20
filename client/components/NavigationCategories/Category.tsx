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

const Category:React.FC = () => {

  //* აქ იქნება ყველა ისეთეი სტეიტი,რომელიც პასუხისმგებელია გახსნა/დახურვაზე
  //* და მსგავს პატარა რაღაცეებზე
  const [isMouseleftCategory, setIsMouseleftCategory] = useState(false);

  //* ესენი გვეხმარებიან დავარენდეროთ ის წამოღებული  კატეგორიის სახელები.
  //* ერთ Sub მეორე Sub_sub ისთვის
  const [rendersSubNames, setRendersSubNames] = useState([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState(false);

  //* ესენი JSON ობიექტებისთვის რომ შემომეკლო დასახელება,ამიტომ სტეიტშია
  const [mainCategories, setCategories] = useState(MainCategories.categories.main_categories);
  const [subCategories, setSubCategories] = useState(MainCategories.categories.sub_categories);
  const [subSubCategories, setSubSubCategories] = useState(MainCategories.categories.sub_sub_categories);

  //* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_categoria
  const handleFetchMainCategory = (id: number, e) => {
    e.preventDefault();

    const filteredSubCategory = subCategories.filter(
      (sub_id) => sub_id.main_category_id === id
    );
    setRendersSubNames(filteredSubCategory);
  };

  //* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_Sub_categoria
  const handleFetchSubCategoryClick = (id: number, e) => {
    e.preventDefault();
    const filteredSubSubCategory = subSubCategories.filter(
      (sub_id) => sub_id.sub_category_id === id
    );
    setRendersSubSubNames(filteredSubSubCategory);
  };

  

  return (
    <>
     
      <motion.ul
        className="list__main-category"
        onClick={() => setIsMouseleftCategory(false)}
        variants={MainCategoryLeftMoveAnimation}
        initial={{ left: "42%", top: "125%" }}
        animate={isMainCategoryChosen && "left"}
      >
        {mainCategories.map((data) => (
          <Maincategory
            handleFetchMainCategory={handleFetchMainCategory}
            setIsMainCategoryChosen={setIsMainCategoryChosen}
            key={data.id}
            id={data.id}
            name={data.name}
          />
        ))}
      </motion.ul>
        

      
        {isMainCategoryChosen &&
      <motion.ul
        className="list__sub-category"
        onClick={() => setIsMouseleftCategory(true)}
        variants={SubCategoryLeftMoveAnimation}
        initial={{ left: "40%", top: "125%", display: "none", opacity: 0 }}
        animate={isMainCategoryChosen && "left"}
      >
        {rendersSubNames &&
          rendersSubNames.map((data) => (
            <SubCategory
              handleFetchSubCategoryClick={handleFetchSubCategoryClick}
              setIsSubCategoryChosen={setIsSubCategoryChosen}
              key={data.id}
              id={data.id}
              name={data.name}
            />
          ))}
      </motion.ul>
        }

     

      {isMouseleftCategory && (
        <motion.ul
          className="list__sub-sub-category"
          // onMouseLeave={() => setIsMouseleftCategory((isMouseleftCategory) => !isMouseleftCategory)}
          variants={SubSubCategoryLeftMoveAnimation}
          initial={{ left: "58%", top: "125%", display: "none", opacity: 0 }}
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
