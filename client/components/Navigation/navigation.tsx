<<<<<<< HEAD
import { FC, useState } from "react";
import { ShoppingCart, ChevronDown } from "react-feather";
import NextLink from "components/utils/NextLink";
import useSWR from 'swr';
=======
import { FC,useState } from "react";
import { ShoppingCart, ChevronDown } from "react-feather";
import NextLink from "components/utils/NextLink";
import { Search } from "react-feather";
>>>>>>> 66d7c83bb1da580829549564694db763785725ed


//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────────

import Category from "components/Navigation/Category";
<<<<<<< HEAD
import InputSearch from "components/global_components/inputs/inputSearch";
import { getAllCategories } from '../../../server/api/client/categories/categories.controller';
import Axios from 'axios';
import { fetcher } from '../../actions/swr/fetchers';

=======
import Input from "components/global_components/inputs/input";
>>>>>>> 66d7c83bb1da580829549564694db763785725ed



const Navigation: FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);

  const {data} = useSWR(`${process.env.BACK_END_URL}/api/categories/all`, fetcher)




  return (
    <>
      <header className="header">
        <div className="logo_container">
          <NextLink route="/">
            <div className="logo"></div>
          </NextLink>
          <div className="input">
            <Input 
            type={"text"} 
            placeHolder={"მოძებნე სასურველი კურსი"} 
            icon={<Search size={22}/>}
            />
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
            <Category categories={data.categories}/>
          )}
        </div>


        <div className="navigation_menu">
          <div className="navigation_menu--container">
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
              <NextLink route="/login">
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
