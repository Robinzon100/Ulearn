import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";



//! ─── IMPORTS ────────────────────────────────────────────────────────────────────
import Maincategory from "components/NavigationCategories/main_category";
import SubCategory from "components/NavigationCategories/sub_category";
import SubSubCategory from "components/NavigationCategories/sub_sub_category";
import { MainCategoryLeftMoveAnimation, SubCategoryLeftMoveAnimation, SubSubCategoryLeftMoveAnimation } from "components/utils/framer/framerAnimation";
import { handleHoverMainCategory, handleHoverSubCategory } from "components/utils/Category/CategoryFunctions";
import { getAllCategories } from '../../actions/client/categories';



const Category: React.FC = () => {

  const [isMouseleftSubSubCategory, setIsMouseleftSubSubCategory] = useState(false);

  const [rendersSubNames, setRendersSubNames] = useState([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState(false);

  const [mainCategories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);

  const [dataFeatched, setDataFeatched] = useState(false)


  const fetchAllCategories = async () => {
    const { categories: { main_categories, sub_categories, sub_sub_categories } } = await getAllCategories();
    setCategories(main_categories);
    setSubCategories(sub_categories);
    setSubSubCategories(sub_sub_categories);
    setDataFeatched(true)
  }

  useEffect(() => {
    if (!dataFeatched) {
      debugger
      fetchAllCategories()
    }
  }, [])

  return (
    <>

      <motion.ul
        className="list__main-category"
        onMouseEnter={() => setIsMouseleftSubSubCategory(false)}
        variants={MainCategoryLeftMoveAnimation}
        initial={{ left: "34rem" }}
        animate={isMainCategoryChosen && "left"}>


        {mainCategories.map((data) => (
          <Maincategory
            handleFetchMainCategory={() =>
              handleHoverMainCategory(
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




      {rendersSubNames.length > 0 &&
        <motion.ul
          className="list__sub-category"
          variants={SubCategoryLeftMoveAnimation}
          initial={{ left: "25rem", display: "none", opacity: 0 }}
          animate={isMainCategoryChosen && rendersSubNames.length > 0 && "left"}>



          {rendersSubNames &&
            rendersSubNames.map((data) => (
              <SubCategory
                handleFetchSubCategoryClick={() =>
                  handleHoverSubCategory(
                    data.id,
                    subSubCategories,
                    setRendersSubSubNames
                  )
                }
                setIsSubCategoryChosen={setIsSubCategoryChosen}
                setIsMouseleftSubSubCategory={setIsMouseleftSubSubCategory}
                rendersSubSubNames={rendersSubSubNames}
                key={data.id}
                id={data.id}
                name={data.name}
              />
            ))}
        </motion.ul>
      }





      {isMouseleftSubSubCategory && rendersSubSubNames.length > 0 && (
        <motion.ul
          className="list__sub-sub-category"
          variants={SubSubCategoryLeftMoveAnimation}
          initial={{ right: "7rem", display: "none", opacity: 0 }}
          animate={isSubCategoryChosen && rendersSubSubNames.length > 0 && "left"}
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
