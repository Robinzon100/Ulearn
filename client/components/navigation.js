import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import Search from "../components/search";




//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getNewPagesLinks } from "actions/client/newPage";


const NavLink = (props) => {
    const { route, title, children } = props;
    return (
        <Link href={route}>
            <a className='paragraph-medium heading-semi-bold'>{title}
                {children}
            </a>
        </Link>
    );
};

const Navigation = (props) => {
    const Logo = "vercel.svg";
    const Hamburger = "vercel.svg";



    const [open, isOpen] = useState(false);
    const [newPageLinks, setNewPageLinks] = useState([]);

    useEffect(() => {
        getNewPagesLinks()
            .then(links =>{
                if(links && links.links) {
                    setNewPageLinks(links.links)
                }
            })
        return () => {
        }       
    },[])

    const router = useRouter();
    
    
    let toggle = () => {
        isOpen((open) => !open);
    };

    const [search, setSearch] = useState(false);

    let searchToggle = () => {
        setSearch((search) => !search);
    };
    

    return (
        <React.Fragment>
            {/* <Head>
                <title>CROP2SHOP</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                    key='viewport'
                />
            </Head> */}
            <header>
                
                <div className='header_container observer-nav'>
                    <div className='logo'>

                        <NavLink route='/' >  <img src={Logo} alt='Main-Logo' className='main_logo' /> </NavLink>
                    </div>

                    <div
                        className={
                            open
                                ? "navigation_menu active_nav"
                                : "navigation_menu  "
                        }>
                        <ul className='navigation_menu__list'>
                            <li
                               
                                className={
                                    router.pathname == "/"
                                        ? "navigation_menu__list__items activeLink"
                                        : "navigation_menu__list__items "
                                }>
                                <NavLink route='/' title='მთავარი' />
                               
                            </li>
                            <li
                               
                                className={
                                    router.pathname == "/about"
                                        ? " navigation_menu__list__items activeLink"
                                        : "navigation_menu__list__items"
                                }>
                                <NavLink route='/about' title='ჩვენს შესახებ' />
                            </li>

                            <li
                               
                                className={
                                    router.pathname == "/news"
                                        ? "navigation_menu__list__items activeLink"
                                        : "navigation_menu__list__items"
                                }>
                                <NavLink route='/news' title='სიახლეები' />
                            </li>

                            <li
                               
                                className={
                                    router.pathname == "/publications"
                                        ? " navigation_menu__list__items activeLink"
                                        : "navigation_menu__list__items"
                                }>
                                <NavLink
                                    route='/publications'
                                    title='პუბლიკაციები'
                                />
                            </li>



                            {newPageLinks ? 
                                newPageLinks.length > 0 ?
                                    newPageLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className={
                                            router.asPath == `/newPage/${link._id}`
                                                ? " navigation_menu__list__items activeLink"
                                                : "navigation_menu__list__items"
                                        }>
                                        <NavLink
                                            route={'/newPage/' + link._id}
                                            title={link.menuTitle}
                                        />
                                    </li>
                                ))
                             : null 

                             : null}



                            <li
                               
                                className={
                                    router.pathname == "/contact"
                                        ? " navigation_menu__list__items activeLink"
                                        : "navigation_menu__list__items"
                                }>
                                <NavLink route='/contact' title='კონტაქტი' />
                            </li>
                            
                         
                            
                         


                        </ul>
                    </div>


                    <div className='hamburer_container searchIsActive'>
                        <div className='hamburger'>
                            <img
                                src={Hamburger}
                                onClick={toggle}
                                alt='hamburger'
                            />
                        </div>
                    </div>
                </div>
                <div className='side-nav'></div>

                {/* <Search searchToggle={searchToggle} search={search} /> */}
            </header>
        </React.Fragment>
    );
}


// Navigation.getInitialProps = async () => {
//     let { links } = await getNewPagesLinks()
//     // setNewPageLinks(links)
//     return {
//         links: links
//     }

// }




export default Navigation;