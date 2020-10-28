import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShoppingCart } from "react-feather";
// import Search from "../components/search";

import InputSearch from "components/global_components/inputs/inputSearch";

//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getNewPagesLinks } from "actions/client/newPage";

const NavLink = (props) => {
  const { route, title, children } = props;
  return (
    <Link href={route}>
      <a className="menu--list--items--links  paragraph-regular-Noto paragraph-medium-small">
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

  // const [search, setSearch] = useState(false);

  // let searchToggle = () => {
  //     setSearch((search) => !search);
  // };

  return (
    <React.Fragment>
        <header className="header">
        <div className="logo_container">
          <div className="logo"></div>

          <div className="input">
            <InputSearch placeHolder={placeHolder} />
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

              <li className="menu--list--items">
                <NavLink route="/MyCourses" title="ჩემი კურსები" />
              </li>
              <li className="menu--list--items">
                <NavLink route="/about" title="ჩვენს შესახებ" />
              </li>
            </ul>
          </div>

          <div className="login">
            <a href="#">
              <p className="Eina-semibold">login / sign up</p>
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
