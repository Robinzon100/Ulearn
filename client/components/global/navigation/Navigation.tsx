import { useEffect, useState } from "react";
import useSWR from "swr";
import { ShoppingCart, ChevronDown, Search } from "react-feather";
import { useCookies } from "react-cookie";



//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────────
import { deleteCookie } from "components/utils/auth/deleteCookie"


//? COMPONENTS
import Category from "components/global/navigation/Category/Category";
import Input from "components/lib/inputs/Input";
import NextLink from "components/utils/nextLink/NextLink";
import Button from "components/lib/button/Button";
import Logout from "components/lib/logout/Logout";
import MobileCategory from "components/global/navigation/mobile-caregory/MobileCategory";


//? ACTIONS
import { fetcher } from "actions/swr/fetchers";





const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);

  const [isLougoutToggled, setIsLougoutToggled] = useState(false);
  const [toggleMobileCategory, setToggleMobileCategory] = useState(false);

  const [cookies, removeCookie] = useCookies(["name"]);



  const { data } = useSWR(
    `${process.env.BACK_END_URL}/api/categories/all`,
    fetcher
  );




  useEffect(() => {
    setIsLogedIn(cookies.auth_refresh_token ? true : false);
  }, []);





  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-search">


            {/* //* ======= LOGO ===== */}
            <div className="logo_container">
              <NextLink route="/">
                <div className="logo"></div>
              </NextLink>
            </div>


            {/* //* ======= SEARCH ===== */}

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




          {/* //* ======= CATEGORY ===== */}
          <div
            className="header-category-menu"
            onClick={() => {
              setIsToggled((isToggled) => !isToggled);
              setIsMouseLeftCategory(true);
            }}
          >
            <div className="header-category-menu--heading">
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




            {/* //* ======= BECOME LECTURE ===== */}

            <div className="become-lectore">
              <NextLink route="/myCourses" className="link">
                <p className="f-weight-r f-size-p6">ლექტორი</p>
              </NextLink>
            </div>




            {/* //* ======= PROFILE ===== */}
            {isLogedIn && (
              <div
                className="profile"
                onClick={() =>
                  setIsLougoutToggled((isLougoutToggled) => !isLougoutToggled)
                }
              >
                <div className="user-icon" />
                <Logout
                  deleteCookie={() => deleteCookie(removeCookie)}
                  isLougoutToggled={isLougoutToggled}
                />
              </div>
            )}




            {/* //* ======= CART ===== */}

            <div className="cart">
              <NextLink route="/shopping_cart">
                <ShoppingCart />
              </NextLink>
            </div>




            {/* //* ======= LOGIN ===== */}

            {!isLogedIn && (
              <div className="login">
                <Button route="/login" size="mini" color="blue">
                  <p className="f-weight-r f-size-p7">login / sign up</p>
                </Button>
              </div>
            )}





            {/* //* ======= HAMBURGER ===== */}

            <div
              className="mobile_hamburger"
              onClick={() =>
                setToggleMobileCategory(
                  (toggleMobileCategory) => !toggleMobileCategory)} />

            {toggleMobileCategory && (
              <MobileCategory
                isLogedIn={isLogedIn}
                toggleMobileCategory={toggleMobileCategory}
                setToggleMobileCategory={() =>
                  setToggleMobileCategory((toggleMobileCategory) => !toggleMobileCategory
                  )}
                categories={data?.categories}
              />
            )}
          </div>


        </div>
      </header>
    </>
  );
};

export default Navigation;
