import { FC, useState, memo} from "react";
import { motion } from "framer-motion";



//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────────
import Maincategory from "components/Navigation/main_category";
import SubCategory from "components/Navigation/sub_category";
import SubSubCategory from "components/Navigation/sub_sub_category";
import { MainCategoryLeftMoveAnimation, SubCategoryLeftMoveAnimation, SubSubCategoryLeftMoveAnimation } from "components/utils/framer/framerAnimation";
import { handleHoverMainCategory, handleHoverSubCategory } from "components/utils/Category/CategoryFunctions";


interface categories {
  categories: any
}


const Category: FC<categories> = ({ categories: { main_categories, sub_categories, sub_sub_categories } }) => {

  const [isMouseleftSubSubCategory, setIsMouseleftSubSubCategory] = useState(false);

  const [rendersSubNames, setRendersSubNames] = useState([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState(false);


 

  return (
    <>
      <motion.ul
        className="list__main-category"
        onMouseEnter={() => setIsMouseleftSubSubCategory(false)}
        variants={MainCategoryLeftMoveAnimation}
        initial={{ left: "34rem" }}
        animate={isMainCategoryChosen && "left"}>


        {main_categories?.map((data) => (
          <Maincategory
            handleFetchMainCategory={() =>
              handleHoverMainCategory(
                data.id,
                sub_categories,
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
          animate={isMainCategoryChosen && rendersSubNames.length > 0 && "left"}>
            {rendersSubNames &&
            rendersSubNames?.map((data) => (
              <SubCategory
                handleFetchSubCategoryClick={() =>
                  handleHoverSubCategory(
                    data.id,
                    sub_sub_categories,
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
      
      
      {isMouseleftSubSubCategory &&  (
        <motion.ul
          className="list__sub-sub-category"
          variants={SubSubCategoryLeftMoveAnimation}
          initial={{ right: "7rem", display: "none", opacity: 0 }}
          animate={isSubCategoryChosen && rendersSubSubNames.length > 0 && "left"}
        >
          {rendersSubSubNames &&
            rendersSubSubNames?.map((data) => (
              <SubSubCategory key={data.id} id={data.id} name={data.name} />
            ))}
        </motion.ul>
      )}

    </>
  );
};

export default memo(Category);
