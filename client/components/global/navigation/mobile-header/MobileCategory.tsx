import { X } from "react-feather";

import Line from "components/lib/line/Line";
import NextLink from "components/utils/nextLink/NextLink";
import { useState } from "react";

const MobileCategory = ({ toggleMobileCategory, setToggleMobileCategory }) => {
  const [closeMobileCategory] = useState(false);



  const closeMobileCategoryNavigation = () =>
    setToggleMobileCategory(closeMobileCategory);




  return (
    <>
      {toggleMobileCategory && (
        <div className="mobile-category" onClick={() => closeMobileCategoryNavigation()}>
          <div className="mobile-category_container">
            <nav className="category-navigation">
              <ul className="mobile-loginRegistration">
                <li className="login">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p3 f-weight-r">
                      დალოგინება
                    </p>
                  </NextLink>
                </li>
                <li className="registration">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p3 f-weight-r">
                      რეგისტრაცია
                    </p>
                  </NextLink>
                </li>
              </ul>

              <Line
                width="100%"
                thickness="1px"
                color="#c9c9c9"
                margin="1rem"
              />

              <ul className="category-list">
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
                <li className="category-list--item">
                  <NextLink route="#" className="link">
                    <p className="c-primary-dark f-size-p2 f-weight-r">ბექა</p>
                  </NextLink>
                </li>
              </ul>
            </nav>

            <div
              className="caregory_closeBtn"
              onClick={() => closeMobileCategoryNavigation()}
            >
              <X size="60" stroke="#338eff" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileCategory;
