import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { ShoppingCart } from "react-feather";


//! ─── IMPORTS ────────────────────────────────────────────────────────────────────
import InputSearch from "components/global_components/inputs/inputSearch";
import Category from "components/NavigationCategories/Category";
import MainCategory from "public/json/MainCategory.json";

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

  const [categoriesJson, setCategoriesJson] = useState(MainCategory.main_categories);

  // const [open, isOpen] = useState(false);
  // const [newPageLinks, setNewPageLinks] = useState([]);

  // useEffect(() => {
  //     getNewPagesLinks()
  //         .then(links =>{
  //             if(links && links.links) {
  //                 setNewPageLinks(links.links)
  //             }
  //         })
  //     return () => {
  //     }
  // },[])

  // const router = useRouter();

  // let toggle = () => {
  //     isOpen((open) => !open);
  // };


  return (
    <React.Fragment>
        <header className="header">
        <div className="logo_container">
          <div className="logo"></div>

          <div className="input">
            <InputSearch id={1} placeHolder={placeHolder} />
          </div>
        </div>

        <div className="header__category-menu">
            <div className="header__category-menu--heading">
                <p className="heading-extra-bold paragraph-medium-small">კატეგორიები</p>
                <span className="chevrondown">
                    <ChevronDown/>
                </span>
            </div>
            <div className="header__category-menu--list-container">
                {/* <Category categories={categoriesJson}/> */}
            </div>
            
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

          <a href="#" className="unregistered_user">
            <div></div>
          </a>
        </div>
        <div className="mobile_hamburger">
            
        </div>
      </header>
    </React.Fragment>
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
