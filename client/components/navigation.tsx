import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { ShoppingCart } from "react-feather";
import { motion } from "framer-motion";

//! ─── IMPORTS ────────────────────────────────────────────────────────────────────
import InputSearch from "components/global_components/inputs/inputSearch";
import Category from "components/NavigationCategories/main_category";
import SubCategory from "components/NavigationCategories/sub_category";
import SubSubCategory from "components/NavigationCategories/sub_sub_category";
import MainCategories from "public/json/MainCategories.json";
import {
  MainCategoryToggleAnimation,
  MainCategoryChildren,
  MainCategoryLeftMoveAnimation,
  SubCategoryLeftMoveAnimation,
  SubSunCategoryLeftMoveAnimation
} from "components/utils/framer/framerAnimation";

//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getNewPagesLinks } from "actions/client/newPage";

const NavLink = (props) => {
  const { route, title, children } = props;
  return (
    <Link href={route}>
      <a className="menu--list--items--links  paragraph-regulars paragraph-small">
        {title}
        {children}
      </a>
    </Link>
  );
};

const Navigation: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>(
    "მოძებნე სასურველი კურსი"
  );

  //* აქ იქნება ყველა ისეთეი სტეიტი,რომელიც პასუხისმგებელია გახსნა/დახურვაზე
  //* და მსგავს პატარა რაღაცეებზე
  const [isMouseleftCategory, setIsMouseleftCategory] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  //* ესენი გვეხმარებიან დავარენდეროთ ის წამოღებული  კატეგორიის სახელები.
  //* ერთ Sub მეორე Sub_sub ისთვის
  const [rendersSubNames, setRendersSubNames] = useState([]);
  const [rendersSubSubNames, setRendersSubSubNames] = useState([]);

  const [isMainCategoryChosen, setIsMainCategoryChosen] = useState(false);
  const [isSubCategoryChosen, setIsSubCategoryChosen] = useState(false);

  //* ესენი JSON ობიექტებისთვის რომ შემომეკლო დასახელება,ამიტომ სტეიტშია
  const [mainCategories, setCategories] = useState(
    MainCategories.categories.main_categories
  );
  const [subCategories, setSubCategories] = useState(
    MainCategories.categories.sub_categories
  );
  const [subSubCategories, setSubSubCategories] = useState(
    MainCategories.categories.sub_sub_categories
  );

  //* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_categoria
  const handleMainCategoryClick = (id: number, e) => {
    e.preventDefault();

    const filteredSubCategory = subCategories.filter(
      (sub_id) => sub_id.main_category_id === id
    );
    setRendersSubNames(filteredSubCategory);
  };

  //* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_Sub_categoria
  const handleSubCategoryClick = (id: number, e) => {
    e.preventDefault();
    const filteredSubSubCategory = subSubCategories.filter(
      (sub_id) => sub_id.sub_category_id === id 
    );
    setRendersSubSubNames(filteredSubSubCategory);
  };

  const handleIsToggled = () => {
    setIsToggled((isToggled) => !isToggled);
  };

  return (
    <>
      <header className="header">
        <div className="logo_container">
          <div className="logo"></div>

          <div className="input">
            <InputSearch id={1} placeHolder={placeHolder} />
          </div>
        </div>

        <div className="header__category-menu" 
        // onClick={handleIsToggled}
        >
          <div className="header__category-menu--heading">
            <p className="heading-extra-bold paragraph-medium-small">
              კატეგორიები
            </p>
            <span className="chevrondown">
              <ChevronDown />
            </span>
          </div>
          </div>

          /* TODO აქ გაარკვიე რატომა პრობლემა დახურვა-დაკეტვაზე/
          /** შვილებსაც რომ აჭერ მაშინაც უხურება
          /** ასევე თუ მთავარ მენიუს შეცვილი ბოლო მენიუც უნდა შეიცვალოს
          */
            
        <div className="list">
              {/* //* ============== MAIN-CATEGORY */}
              <motion.ul
                className="list__main-category"
                onMouseLeave={() => setIsMouseleftCategory(false)}
                  variants={MainCategoryLeftMoveAnimation}
                  initial={{ left: "42%",top:"125%" }}
                  animate={isMainCategoryChosen && "left"}
              >
                {mainCategories.map((data) => (
                  <Category
                    handleMainCategoryClick={handleMainCategoryClick}
                    setIsMainCategoryChosen={setIsMainCategoryChosen}
                    key={data.id}
                    id={data.id}
                    name={data.name}
                  />
                ))}
              </motion.ul>
              {/* //* ============== SUB-CATEGORY */}
              {isMainCategoryChosen && (
                <motion.ul className="list__sub-category"
                variants={SubCategoryLeftMoveAnimation}
                initial={{ left: "45%",top:"125%" }}
                animate={isMainCategoryChosen && "left"}
                >
                  {rendersSubNames &&
                    rendersSubNames.map((data) => (
                      <SubCategory
                        handleSubCategoryClick={handleSubCategoryClick}
                        setIsSubCategoryChosen={setIsSubCategoryChosen}
                        key={data.id}
                        id={data.id}
                        name={data.name}
                      />
                    ))}
                </motion.ul>
              )}
              {/* //* ============== SUB_SUB-CATEGORY */}
              {isSubCategoryChosen &&  (
                <motion.ul className="list__sub-sub-category"
                variants={SubSunCategoryLeftMoveAnimation}
                initial={{ left: "60%",top:"125%" }}
                animate={isSubCategoryChosen && "left"}
                >
                  {rendersSubSubNames &&
                    rendersSubSubNames.map((data) => (
                      <SubSubCategory
                        key={data.id}
                        id={data.id}
                        name={data.name}
                      />
                    ))}
                </motion.ul>
              )}
            </div>

        <div className="menu_container">
          <div className="menu">
            <ul className="menu--list">
              <li className="menu--list--items">
                <NavLink route="/courses" title="კურსები" />
              </li>
              <li className="menu--list--items">
                <NavLink route="/lecturers" title="გახდი ლექტორი" />
              </li>
            </ul>
          </div>

          <div className="login">
            <a href="#">
              <p className="medium paragraph-small">login / sign up</p>
            </a>
          </div>

          <div className="cart">
            <a href="#">
              <ShoppingCart />
            </a>
          </div>

          <a href="#" className="unregistered_user"></a>
        </div>
        <div className="mobile_hamburger"></div>
      </header>
    </>
  );
};

// Navigation.getInitialProps = async () => {
//     let { links } = await getNewPagesLinks()
//     // setNewPageLinks(links)
//     return {
//         links: links
//     }

// }

export default Navigation;
