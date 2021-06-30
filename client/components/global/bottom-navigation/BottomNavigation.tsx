
import { useEffect, useState } from "react";

import BottomNavigationSearch from "./BottomNavigationSearch";

// import NextLink from "components/utils/nextLink/NextLink";

import { deleteCookie } from "components/utils/auth/deleteCookie";

import { useCookies } from "react-cookie";
import Link from 'next/link';
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { getUser } from "actions/client/user/profile/profile.action";



const BottomNavigation = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [cookies, removeCookie] = useCookies(["name"]);
    const [getUserPic, setGetUserPic] = useState("")


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



    return (
        <>
            <div className="bottom-navigation">
                <div className="bottom-navigation__container">
                    <div className="item">


                        <div className="bottom-course" onClick={() => deleteCookie(removeCookie)}>
                            {isLogedIn &&
                                <>
                                    <div className="bottom-course-svg"></div>

                                    <div className="bottom-course-heading">
                                        <h1 className="f-size-p8 f-weight-r">გამოსვლა</h1>
                                    </div>
                                </>
                            }

                        </div>


                        <Link href="#" passHref={true}>

                            <div className="bottom-course">
                                <div className="bottom-course-svg"
                                    style={{ backgroundImage: "url(/pictures/bottom-navigation/become-lectore.svg)" }}
                                />

                                <div className="bottom-course-heading">
                                    <h1 className="f-size-p8 f-weight-r">გახდი ლექტორი</h1>
                                </div>
                            </div>
                        </Link>

                    </div>



                    <div className="item search"
                        onClick={() => setToggleSearch((toggleSearch) => !toggleSearch)}
                        data-open={toggleSearch}
                    />

                    <div className="item">
                        <Link href="/courses" passHref={true}>

                            <div className="bottom-course">
                                <div className="bottom-course-svg"
                                    style={{ backgroundImage: "url(/pictures/bottom-navigation/course.svg)" }}
                                />

                                <div className="bottom-course-heading">
                                    <h1 className="f-size-p8 f-weight-r">კურსები</h1>

                                </div>
                            </div>
                        </Link>



                        {isLogedIn &&
                            <Link href="/profile" passHref={true}>

                                <div className="bottom-course">
                                    <div className="bottom-course-svg"
                                        style={{
                                            backgroundImage: `url(${getUserPic ?
                                                process.env.BACK_END_URL + '/api/images/' + getUserPic :
                                                '/pictures/bottom-navigation/profile.svg'
                                                })`, borderRadius: "100px"
                                        }}
                                    />

                                    <div className="bottom-course-heading">
                                        <h1 className="f-size-p8 f-weight-r">პროფილი</h1>
                                    </div>
                                </div>
                            </Link>

                        }

                    </div>
                </div>



                {toggleSearch &&
                    <BottomNavigationSearch />
                }
            </div>
        </>
    );
};







export default BottomNavigation;
