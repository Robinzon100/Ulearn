import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { ChevronDown, Search } from "react-feather";
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
import { getUser } from "actions/client/user/profile/profile.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { useClickOutside } from "components/utils/helpers/outSideClickHandler"
import { useRouter } from 'next/router';





const Navigation = () => {

  const wrapperRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isMouseleftCategory, setIsMouseLeftCategory] = useState(false);

  const [isLougoutToggled, setIsLougoutToggled] = useState(false);
  const [toggleMobileCategory, setToggleMobileCategory] = useState(false);

  const [cookies, removeCookie] = useCookies(["name"]);
  const [getUserPic, setGetUserPic] = useState("")
  const router = useRouter()


  const { data } = useSWR(
    `${process.env.BACK_END_URL}/api/categories/all`,
    fetcher
  );



  const getUserPicture = async () => {
    const res = await authenticatedRequest(getUser, null, null);

    if (res.statusCode == 200)
      setGetUserPic(res.user?.image_url);
  }




  useEffect(() => {
    setIsLogedIn(cookies.auth_refresh_token ? true : false);
  }, [cookies.auth_refresh_token]);




  useEffect(() => {
    if (cookies.auth_access_token && cookies.auth_access_token.length > 0)
      getUserPicture()
  }, [cookies.auth_access_token])




  useClickOutside(wrapperRef, setIsLougoutToggled);





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
                maxWidth="50rem"
                onKeyDown={(e) => {
                  if (e.key === 'Enter')
                    router.push(`/courses?search=${e.currentTarget.value}`)
                }}
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
                }}>
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
              <NextLink route="mailto:info@ulearn.com" className="link">
                <p className="f-weight-r f-size-p6">გახდი ლექტორი</p>
              </NextLink>
            </div>




            {/* //* ======= PROFILE ===== */}
            {isLogedIn && (
              <div
                ref={wrapperRef}
                className="profile"
                onClick={() =>
                  setIsLougoutToggled((isLougoutToggled) => !isLougoutToggled)}>
                <div className="user-icon"
                  style={{
                    backgroundImage: `url(${getUserPic ?
                      process.env.BACK_END_URL + '/api/images/' + getUserPic :
                      '/pictures/unregistered_user.svg'
                      })`
                  }}

                />


                <Logout
                  deleteCookie={() => deleteCookie(removeCookie)}
                  isLougoutToggled={isLougoutToggled}

                />


              </div>
            )}




            {isLogedIn && (
              <Button route="/new_course" className="new_course_btn" size="mini" color="black">
                <p className="f-weight-r f-size-p7">კურსის შექმნა</p>
              </Button>

            )}



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
                setToggleMobileCategory((toggleMobileCategory) => !toggleMobileCategory)}
            />



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
