import { FC, useState, memo} from "react";
import { motion } from "framer-motion";

//! ─── OUR IMPORTS ────────────────────────────────────────────────────────────────────
import Maincategory from "./main_category";
import SubCategory from "./sub_category";
import SubSubCategory from "./sub_sub_category";
import { MainCategoryLeftMoveAnimation, SubCategoryLeftMoveAnimation, SubSubCategoryLeftMoveAnimation } from "components/lib/framer/framerAnimation";
import { handleHoverMainCategory, handleHoverSubCategory } from "components/global/navigation/Category/CategoryLogic";


interface categories {
  categories: any
}

interface SubCategories {
    id:number,
    name:string
}

const Category: FC<categories> = ({ categories: { main_categories, sub_categories, sub_sub_categories } }) => {

  const [isMouseleftSubSubCategory, setIsMouseleftSubSubCategory] = useState<boolean>(false);

  const [rendersSubNames, setRendersSubNames] = useState<SubCategories[]>([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState<SubCategories[]>([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState<boolean>(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState<boolean>(false);
  
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
                // rendersSubSubNames={rendersSubSubNames}
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
              <SubSubCategory key={data.id}  name={data.name} />
            ))}
        </motion.ul>
      )}

    </>
  );
};

export default memo(Category);