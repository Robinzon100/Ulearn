import React, { useEffect, useState } from "react";
import { ShoppingCart, ChevronDown } from "react-feather";
import {NextLink}  from "components/utils/NextLink";


//! ─── IMPORTS ────────────────────────────────────────────────────────────────────

import Category from "./NavigationCategories/Category";
import InputSearch from "components/global_components/inputs/inputSearch";







const Navigation: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>(
    "მოძებნე სასურველი კურსი"
  );

  const [isToggled, setIsToggled] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);


  return (
    <>
      <header className="header">
        <div className="logo_container">
          <NextLink  route='/'>
            <div className="logo"></div>
          </NextLink>
          <div className="input">
            <InputSearch id={1} placeHolder={placeHolder} />
          </div>
        </div>

        <div className="header__category-menu"
          onClick={() => { setIsToggled((isToggled) => !isToggled); setIsMouseLeftCategory(true) }}>
          <div className="header__category-menu--heading">
            <p className="heading-extra-bold paragraph-medium-small">
              კატეგორიები
            </p>
            <span className="chevrondown">
              <ChevronDown />
            </span>
          </div>
        </div>


        {/* //* ============== MAIN-CATEGORY */}
        <div className="list"
          onMouseLeave={() => { setIsToggled(false); setIsMouseLeftCategory(false) }}>
          {isToggled && isMouseleftCategory && (
            <Category />
          )}
        </div>


        <div className="menu_container">
          <div className="menu">
            <ul className="menu--list">
              <li className="menu--list__items">
                <NextLink route="/courses" className="menu--list__items--links">
                    <p className="paragraph-regulars paragraph-small">კურსები</p>
                </NextLink>
              </li>
              <li className="menu--list__items">
                <NextLink route="/lecturers" className="menu--list__items--links">
                    <p className="paragraph-regulars paragraph-small">გახდი ლექტორი</p>
                </NextLink>
              </li>
            </ul>
          </div>

          <div className="login">
            <NextLink route="/singup">
              <p className="medium paragraph-small">login / sign up</p>
            </NextLink>
          </div>

          <div className="cart">
            <NextLink route="/shoppingCart">
              <ShoppingCart />
            </NextLink>
          </div>

          <NextLink route="/shoppingCart" className="unregistered_user">

          </NextLink>
        </div>
        <div className="mobile_hamburger"></div>
      </header>
    </>
  );
};



export default Navigation;
