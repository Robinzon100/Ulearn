import { ChevronRight } from "react-feather";
import NextLink from 'components/utils/nextLink/NextLink';

// import { PieChart,Briefcase,Sho } from "react-feather";

import { NavigationIcons } from "components/global/navigation/Category/utils/NavigatioIcons"

import Icon from "components/lib/Icon/Icon";



const MainCategory = ({ handleFetchMainCategory, setIsMainCategoryChosen, id, name }, props) => {


  return (
    <>
      <NextLink
        route={`courses?m_i=${id}`}
        className=" list__main-category--item  f-size-p6">
        <li
          key={props.key}
          className="item"
          onMouseEnter={() => {
            handleFetchMainCategory(id);
            setIsMainCategoryChosen(true)
          }}>
          <div className="item-container">

            <div className="item-container__cube-text">

                <Icon 
                    key={id} 
                    name={NavigationIcons[id - 1]}
                    strokeWidth={1}
                    size={17} 
                />

              <div className="text">
                {name}
              </div>

            </div>

            <div className="item-container__chevron">
              <ChevronRight size={25} />
            </div>
          </div>
        </li>
      </NextLink>


    </>
  );
};

export default MainCategory;
