import { FC, useState, memo } from "react";
import { motion } from "framer-motion";

//! ─── OUR IMPORTS ────────────────────────────────────────────────────────────────────
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import SubSubCategory from "./SubSubCategory";
import { MainCategoryLeftMoveAnimation, SubCategoryLeftMoveAnimation, SubSubCategoryLeftMoveAnimation } from "components/lib/framer/framerAnimation";
import { handleHoverMainCategory, handleHoverSubCategory } from "components/global/navigation/Category/CategoryLogic";


interface categories {
    categories: any
}

interface SubCategories {
    id: number,
    name: string
}





const Category: FC<categories> = ({ categories: { main_categories, sub_categories, sub_sub_categories } }) => {

    const [isMouseleftSubSubCategory, setIsMouseleftSubSubCategory] = useState<boolean>(false);

    const [rendersSubNames, setRendersSubNames] = useState<SubCategories[]>([]);
    const [rendersSubSubNames, setRendersSubSubNames] = useState<SubCategories[]>([]);

    const [isMainCategoryChosen, setIsMainCategoryChosen] = useState<boolean>(false);
    const [isSubCategoryChosen, setIsSubCategoryChosen] = useState<boolean>(false);



    const [mainCategoryId, setmainCategoryId] = useState(null);
    const [subCategoryId, setSubCategoryId] = useState(null);



    return (
        <>
            <motion.ul
                className="list__main-category"
                onMouseEnter={() => setIsMouseleftSubSubCategory(false)}
                variants={MainCategoryLeftMoveAnimation}
                initial={{ left: 340 }}
                animate={isMainCategoryChosen && "left"}>


                {main_categories?.map((data,i) => (

                    <MainCategory
                        handleFetchMainCategory={() => {
                            handleHoverMainCategory(data.id, sub_categories, setRendersSubNames)
                            setmainCategoryId(data.id)
                        }}
                        setIsMainCategoryChosen={setIsMainCategoryChosen}
                        key={i}
                        id={data.id}
                        name={data.name}
                    />
                ))}

            </motion.ul>


            <motion.ul
                className="list__sub-category"
                variants={SubCategoryLeftMoveAnimation}
                initial={{ left: 250, display: "none", opacity: 0 }}
                animate={isMainCategoryChosen && rendersSubNames.length > 0 && "left"}>


                {rendersSubNames &&
                    rendersSubNames?.map((data, i) => (
                        <SubCategory
                            handleFetchSubCategory={() => {
                                handleHoverSubCategory(
                                    data.id,
                                    sub_sub_categories,
                                    setRendersSubSubNames
                                );
                                setSubCategoryId(data.id)
                            }}
                            setIsSubCategoryChosen={setIsSubCategoryChosen}
                            setIsMouseleftSubSubCategory={setIsMouseleftSubSubCategory}
                            key={data.id}
                            id={i + 1}
                            mainCategoryId={mainCategoryId}
                            name={data.name}
                        />
                    ))}


            </motion.ul>


            {isMouseleftSubSubCategory && (

                <motion.ul
                    className="list__sub-sub-category"
                    variants={SubSubCategoryLeftMoveAnimation}
                    initial={{ right: 70, display: "none", opacity: 0 }}
                    animate={isSubCategoryChosen && rendersSubSubNames.length > 0 && "left"}>

                    {rendersSubSubNames &&
                        rendersSubSubNames?.map((data,i) => (
                            <SubSubCategory 
                            subCategoryId={subCategoryId}
                            mainCategoryId={mainCategoryId}
                            key={data.id}
                            id={i + 1}
                            name={data.name} 
                        />
                    ))}

                    
                </motion.ul>
            )}

        </>
    );
};

export default memo(Category);
