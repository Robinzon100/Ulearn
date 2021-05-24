import NextLink from "components/utils/nextLink/NextLink";
import { useState } from "react";
import { ShoppingCart, Search } from "react-feather";

import MobileCategory from "./MobileCategory";

const MobileHeader = () => {

    
  const [toggleMobileCategory, setToggleMobileCategory] = useState(false);




  return (
    <>
      <header className="mobile-header">
        <div className="logo_container">
          <NextLink route="/">
            <div className="logo"></div>
          </NextLink>
        </div>

        <div className="mobile-header_container">
          <div className="mobile-search">
            <Search size={20} />
          </div>

          <div className="cart">
            <NextLink route="/shopping_cart">
              <ShoppingCart stroke="black" />
            </NextLink>
          </div>

          <div className="profile">
            <div className="user-icon">
              <NextLink route="/profile" />
            </div>
          </div>



          <div
            className="mobile_hamburger"
            onClick={() =>
              setToggleMobileCategory(
                (toggleMobileCategory) => !toggleMobileCategory
              )
            }
          />
          {toggleMobileCategory && (
            <MobileCategory
              toggleMobileCategory={toggleMobileCategory}
              setToggleMobileCategory={() =>
                setToggleMobileCategory(
                  (toggleMobileCategory) => !toggleMobileCategory
                )
              }
            />
          )}
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
