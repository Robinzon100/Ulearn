import React from "react";

import { Categories } from "../../interfaces/categories.inteface";
import NextLink from "components/utils/NextLink";



const categoriesComponent: React.FC<Categories> = ({ CategoriesJson }) => {
  return (
    <>
      <div className="category_container">
        <ul>
          <li className="category_main--name categoryAll">
            <NextLink route="/#" className="f-size-p4">
              ყველა
            </NextLink>
            <div className="category_main--number">
              <p className="f-size-p7">20</p>
            </div>
          </li>

          {CategoriesJson?.map((data) => (
            
              <li className="category_main--name category_main" key={data.id}>
                <NextLink route="/#" className="f-size-p4">
                  {data.name}
                </NextLink>

                <div className="category_main--number">
                  <p className="f-size-p7">20</p>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

export default categoriesComponent;
