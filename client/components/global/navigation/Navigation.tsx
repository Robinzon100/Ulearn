import { useEffect, useState } from "react";
import useSWR from "swr";
import { ShoppingCart, ChevronDown, Search } from "react-feather";
import NextLink from "components/utils/nextLink/NextLink";


//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────────
//? COMPONENTS
import Category from "components/global/navigation/Category/Category";
import Input from "components/lib/inputs/Input";
import MobileHeader from "components/global/navigation/mobile-header/MobileHeader"
// import MultiStepForm from "components/utils/stepForm/multiStepForm";
import Button from "components/lib/button/Button";

//? ACTIONS
import { fetcher } from "actions/swr/fetchers";
import { useCookies } from 'react-cookie';




const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);
  const [cookies,] = useCookies(['name']);





  const { data } = useSWR(
    `${process.env.BACK_END_URL}/api/categories/all`,
    fetcher
  );

  useEffect(() => {
    setIsLogedIn(cookies.auth_refresh_token ? true : false)
  }, [])



  return (
    <>
      <header className="header">

        <div className="header-container">

          <div className="logo-search">

            <div className="logo_container">
              <NextLink route="/">
                <div className="logo"></div>
              </NextLink>
            </div>

            <div className="search">
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



          <div
            className="header__category-menu"
            onClick={() => {
              setIsToggled((isToggled) => !isToggled);
              setIsMouseLeftCategory(true);
            }}
          >
            <div className="header__category-menu--heading">
              <p className="f-weight-b f-size-p5">კატეგორიები</p>
              <span className="chevrondown">
                <ChevronDown />
              </span>
            </div>

            {/* //* ============== MAIN-CATEGORY */}
            {isToggled && isMouseleftCategory && (
              <div
                className="list"
                onMouseLeave={() => {
                  setIsToggled(false);
                  setIsMouseLeftCategory(false);
                }}
              >
                <Category categories={data.categories} />
              </div>
            )}
          </div>



          <div className="login-profile">

            <div className="course-page">
              <NextLink route="/courses" className="link">
                <p className="f-weight-r f-size-p6">კურსები</p>
              </NextLink>
            </div>



            <div className="become-lectore">
              <NextLink route="/myCourses" className="link">
                <p className="f-weight-r f-size-p6">ლექტორი</p>
              </NextLink>
            </div>


            {!isLogedIn &&
              <div className="login">
                <Button route="/login" size="mini" color="blue">
                  <p className="f-weight-r f-size-p7">login / sign up</p>
                </Button>
              </div>
            }


            <div className="cart">
              <NextLink route="/shopping_cart">
                <ShoppingCart />
              </NextLink>
            </div>


            {isLogedIn &&
              <NextLink route="/profile">

                <div className="profile">
                  <div className="user-icon" />
                </div>
              </NextLink>
            }

          </div>



        </div>
      </header>


      {/* //* MOBILE HEADER */}
      <MobileHeader categories={data?.categories} />

    </>
  );
};


export default Navigation;
