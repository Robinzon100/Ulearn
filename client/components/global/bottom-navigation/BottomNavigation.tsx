
import { useState } from "react";

import BottomNavigationSearch from "./BottomNavigationSearch";
import NextLink from "components/utils/nextLink/NextLink";


const BottomNavigation = () => {
    const [toggleSearch, setToggleSearch] = useState(false);


  return (
    <>
      <div className="bottom-navigation">
        <div className="bottom-navigation__container">
          <div className="item">

              
            <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <NextLink route="#" className="c-primary-dark">
                        <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                    </NextLink>
                </div>
              </div>


              <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <NextLink route="#" className="c-primary-dark">
                        <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                    </NextLink>
                </div>
              </div>
          </div>


 
            <div className="item search"  
                onClick={() => setToggleSearch((toggleSearch) => !toggleSearch)} 
                data-open={toggleSearch}
            />

          <div className="item">

            <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <NextLink route="#" className="c-primary-dark">
                        <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                    </NextLink>
                </div>
              </div>

              <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <NextLink route="#" className="c-primary-dark">
                        <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                    </NextLink>
                </div>
              </div> 
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
