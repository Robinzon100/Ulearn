import { FC, useState } from "react";
import useSWR from 'swr';
import { ShoppingCart, ChevronDown } from "react-feather";
import NextLink from "components/utils/NextLink";
import { Search } from "react-feather";

//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────────

import Category from "components/global_components/Navigation/Category";
import { fetcher } from '../../../actions/swr/fetchers';
import Input from "components/global_components/inputs/Input";



const Navigation: FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);

  const { data } = useSWR(`${process.env.BACK_END_URL}/api/categories/all`, fetcher)




  return (
    <>
      <header className="header" >
        <div className="logo_container">
          <NextLink route="/">
            <div className="logo"></div>
          </NextLink>
          <div className="input">
            <Input
              color="white"
              size="medium"
              type="text"
              placeHolder="მოძებნე სასურველი კურსი"
              icon={<Search size={20} />}
              width="100%"
              disabled={false}
            />
          </div>

        </div>

        <div className="header__category-menu"
          onClick={() => { setIsToggled((isToggled) => !isToggled); setIsMouseLeftCategory(true) }}>
          <div className="header__category-menu--heading">
            <p className="extra-bold paragraph-medium-mini">
              კატეგორიები
            </p>
            <span className="chevrondown">
              <ChevronDown />
            </span>
          </div>
        </div>


        {/* //* ============== MAIN-CATEGORY */}
        {isToggled && isMouseleftCategory && (
        <div className="list"
          onMouseLeave={() => { setIsToggled(false); setIsMouseLeftCategory(false) }}>
              <Category categories={data.categories} />
        </div>
          )}


        <div className="navigation_menu">
          <div className="navigation_menu--container">
            <div className="menu">
              <ul className="menu--list">
                <li className="menu--list__items">
                  <NextLink route="/courses" className="menu--list__items--links">
                    <p className="regular paragraph-small">კურსები</p>
                  </NextLink>
                </li>
                <li className="menu--list__items">
                  <NextLink route="/myCourses" className="menu--list__items--links">
                    <p className="regular paragraph-small">გახდი ლექტორი</p>
                  </NextLink>
                </li>
              </ul>
            </div>

            <div className="login">
              <NextLink route="/multiStepForm">
                <p className="medium paragraph-small">login / sign up</p>
              </NextLink>
            </div>

            <div className="cart">
              <NextLink route="/shopping_cart">
                <ShoppingCart />
              </NextLink>
            </div>

            <NextLink route="/unregistered_user" className="unregistered_user"></NextLink>
          </div>
        </div>
        <div className="mobile_hamburger"></div>
      </header>
    </>
  );
};



export default Navigation;
