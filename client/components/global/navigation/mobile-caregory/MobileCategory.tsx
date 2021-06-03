import { X, ArrowLeft } from "react-feather";
import { useState } from "react";
import { motion } from "framer-motion";

import Line from "components/lib/line/Line";
import NextLink from "components/utils/nextLink/NextLink";

import MobileMainCategory from "./MobileMainCategory";
import MobileSubCategory from "./MobileSubCategory";
// import MobileSubSubCategory from "./MobileSubSubCategory";

import { handleHoverMainCategory,handleHoverSubCategory } from "components/global/navigation/Category/CategoryLogic";

import { MobileCategoryAnimation } from "./MobileCategory.animation";



interface SubCategories {
  id: number;
  name: string;
}




const MobileCategory = ({
    isLogedIn,
  toggleMobileCategory,
  setToggleMobileCategory,
  categories: { main_categories, sub_categories, sub_sub_categories },
}) => {

    
  const [closeMobileCategory,] = useState(false);
  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState<boolean>(false);
  const [, setIsSubCategoryChosen] = useState<boolean>(false);



  const [rendersSubNames, setRendersSubNames] = useState<SubCategories[]>([]);
  const [, setRendersSubSubNames] = useState<SubCategories[]>([]);

  const closeMobileCategoryNavigation = () =>
    setToggleMobileCategory(closeMobileCategory);

  return (
    <>
      {toggleMobileCategory && (
        <div className="mobile-category">
          <div className="mobile-category_container">
            <nav className="category-navigation">


            {!isLogedIn &&
            <>
              <ul className="mobile-loginRegistration">
                <li className="mobile-login">
                  <NextLink route="/login" className="link">
                    <p className="c-secondary-dark-blue  f-size-p3 f-weight-r">
                      დალოგინება
                    </p>
                  </NextLink>
                </li>
                <li className="mobile-registration">
                  <NextLink route="/register" className="link">
                    <p className="c-secondary-dark-blue  f-size-p3 f-weight-r">
                      რეგისტრაცია
                    </p>
                  </NextLink>
                </li>
              </ul>
               

              <Line
                width="100%"
                thickness="1px"
                color="#c9c9c9"
                margin="1rem"
              />
              </>
            }



              <ul
                className="main-category-list">
                {main_categories?.map((data) => (
                  <MobileMainCategory
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    handleFetchMainCategory={() =>
                      handleHoverMainCategory(
                        data.id,
                        sub_categories,
                        setRendersSubNames
                      )
                    }
                    setIsMainCategoryChosen={setIsMainCategoryChosen}
                  />
                ))}
              </ul>








              <motion.ul
                className="sub-category-list"
                variants={MobileCategoryAnimation}
                animate={isMainCategoryChosen ? "open" : "closed"}>
                <li
                  className="go-back-arrow"
                  onClick={() => {
                    setIsMainCategoryChosen(false);
                    setIsSubCategoryChosen(false);
                  }}>
                  <div className="back">
                    <p className="f-size-p3 f-weight-r">უკან</p>
                  </div>
                  <ArrowLeft size={20} stroke="var(--primary-dark)" />
                </li>

                <Line
                  width="100%"
                  thickness="1px"
                  color="#c9c9c9"
                  margin="2rem"
                />

                {rendersSubNames &&
                  rendersSubNames?.map((data) => (
                    <MobileSubCategory
                      handleFetchSubCategoryClick={() =>
                        handleHoverSubCategory(
                          data.id,
                          sub_sub_categories,
                          setRendersSubSubNames
                        )
                      }
                      setIsSubCategoryChosen={setIsSubCategoryChosen}
                      key={data.id}
                      id={data.id}
                      name={data.name}
                    />
                  ))}
              </motion.ul>






            {/* 

              {setIsSubCategoryChosen && (
                <motion.ul
                  className="subSub-category-list"
                  variants={MobileSubSubCategoryAnimation}
                  animate={isSubCategoryChosen ? "open" : "closed"}
                >
                  {setIsSubCategoryChosen &&
                    rendersSubSubNames &&
                    rendersSubSubNames?.map((data) => (
                      <MobileSubSubCategory key={data.id} name={data.name} />
                    ))}
                </motion.ul>
              )} */}

            </nav>








          </div>

          


          <div
              className="caregory_closeBtn"
              onClick={() => closeMobileCategoryNavigation()}
            >
              <X size="25" stroke="var(--primary-dark)" />
            </div>
        </div>
      )}
    </>
  );
};

export default MobileCategory;
