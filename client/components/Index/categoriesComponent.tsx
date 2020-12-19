import React from "react";

import { Categories } from "../../interfaces/categories.inteface";
import NextLink from "components/utils/NextLink";



const categoriesComponent: React.FC<Categories> = ({ CategoriesJson }) => {
  return (
    <>
      <div className="category_container">
        <ul>
          <li className="category_main--name categoryAll">
            <NextLink route="/#" className={"regular paragraph-regular"}>
              ყველა
            </NextLink>
            <div className="category_main--number">
              <p className="semi-bold paragraph-smallest">20</p>
            </div>
          </li>

          {CategoriesJson?.map((data) => (
            
              <li className="category_main--name category_main" key={data.id}>
                <NextLink route="/#" className={"regular paragraph-regular"}>
                  {data.name}
                </NextLink>

                <div className="category_main--number">
                  <p className="semi-bold paragraph-smallest">20</p>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

export default categoriesComponent;
