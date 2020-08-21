import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShoppingCart } from 'react-feather';
// import Search from "../components/search";



import InputSearch from "components/global_components/inputs/inputSearch";


//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getNewPagesLinks } from "actions/client/newPage";


const NavLink = (props) => {
    const { route, title, children } = props;
    return (
        <Link href={route}>
            <a classNameName='paragraph-medium heading-semi-bold'>{title}
                {children}
            </a>
        </Link>
    );
};

const Navigation = (props) => {
    const Logo = "vercel.svg";
    const Hamburger = "vercel.svg";

    const [placeHolder, setPlaceHolder] = useState("მოძებნე სასურველი კურსი")



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
            {/* <Head>
                <title>CROP2SHOP</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                    key='viewport'
                />
            </Head> */}

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
                                <a href="#" title="courses" className="menu--list--items--links paragraph-regular-Noto paragraph-medium-small">კურსები</a>
                            </li>
                            <li className="menu--list--items">
                                <a href="#" title="lecturer" className="menu--list--items--links paragraph-regular-Noto paragraph-medium-small">გახდი ლექტორი</a>
                            </li>
                            <li className="menu--list--items">
                                <a href="#" title="sign" className="menu--list--items--links paragraph-regular-Noto paragraph-medium-small">შესვლა</a>
                            </li>
                            <li className="menu--list--items">
                                <a href="#" title="About" className="menu--list--items--links paragraph-regular-Noto paragraph-medium-small">ჩვენს შესახებ</a>
                            </li>
                            <li className="menu--list--items">
                                <a href="#" title="contact" className="menu--list--items--links paragraph-regular-Noto paragraph-medium-small">კონტაქტი</a>
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

                    <a href="#">
                    <div className="unregistered_user">

                    </div>
                    </a>
                   
                </div>



                {/* 
		<div className="mobile-nav">

			<div className="round">
				<div className="round--item"></div>
			</div>
			<div className="menu--nav">
				<ul className="menu--nav--list ">

					<li className="menu--nav--list--items">
						<a href="#" className="menu--nav--list--items--links links" alt=""><span style="color:#00FF66">შესვლა</span></a>
						<img src="pictures/enter-1.svg" alt="enter" />
					</li>
					<li className="menu--nav--list--items">
						<a href="#" className="menu--nav--list--items--links links" alt="">კურსები</a>
						<img src="pictures/courses.svg" alt="courses" />
					</li>
					<li className="menu--nav--list--items">
						<a href="#" className="menu--nav--list--items--links links" alt="">გახდი ლექტორი</a>
						<img src="pictures/lectur.svg" alt="courses" />
					</li>
					<li className="menu--nav--list--items">
						<a href="#" className="menu--nav--list--items--links links" alt="">კონტაქტი</a>
						<img src="pictures/contact.svg" alt="courses" />
					</li>
					<li className="menu--nav--list--items">
						<a href="#" className="menu--nav--list--items--links links" alt="">ჩვენს შესახებ</a>
						<img src="pictures/about.svg" alt="courses" />
					</li>

				</ul>
			</div>
		</div> */}



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