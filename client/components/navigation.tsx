import React, { useEffect, useState } from "react";
import { ShoppingCart, ChevronDown } from "react-feather";

//! ─── IMPORTS ────────────────────────────────────────────────────────────────────
import { NextLink } from "./utils/NextLink";
import Category from "./NavigationCategories/Category";
import InputSearch from "components/global_components/inputs/inputSearch";

const Navigation: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>(
    "მოძებნე სასურველი კურსი"
  );

  const [isToggled, setIsToggled] = useState(false);
  const [isMouseLeftCategory, setIsMouseLeftCategory] = useState(false);

//   const handleIsToggled = () => {
//     setIsToggled((isToggled) => !isToggled);
//   };

  return (
    <>
      <header className="header">
        <div className="logo_container">
          <div className="logo"></div>

          <div className="input">
            <InputSearch id={1} placeHolder={placeHolder} />
          </div>
        </div>

        <div className="header__category-menu" onClick={() => setIsToggled((isToggled) => !isToggled)}>
          <div className="header__category-menu--heading">
            <p className="heading-extra-bold paragraph-medium-small">
              კატეგორიები
            </p>
            <span className="chevrondown">
              <ChevronDown />
            </span>
          </div>
        </div>

        
          <div className="list"
        //   onMouseLeave={() => setIsMouseLeftCategory((isMouseLeftCategory) => !isMouseLeftCategory)}
          >
            {/* //* ============== MAIN-CATEGORY */}
            {isToggled && (
            <Category />
            )}
          </div>
        

        <div className="menu_container">
          <div className="menu">
            <ul className="menu--list">
              <li className="menu--list--items">
                <NextLink route="/courses" title="კურსები" />
              </li>
              <li className="menu--list--items">
                <NextLink route="/lecturers" title="გახდი ლექტორი" />
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
