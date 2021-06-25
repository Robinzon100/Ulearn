import { ChevronRight } from "react-feather";


import { NavigationIcons } from "components/global/navigation/Category/utils/NavigatioIcons"

import Icon from "components/lib/Icon/Icon";



const MobileMainCategory = ({ id, name, handleFetchMainCategory, setIsMainCategoryChosen }
) => {
  return (
      <li
        className="main-category-list--item"
        key={id}
        onClick={() => {
          handleFetchMainCategory(id);
          setIsMainCategoryChosen(true);
        }}>
        
        <div className="cube-text">

                <Icon 
                    key={id} 
                    name={NavigationIcons[id - 1]}
                    strokeWidth={1}
                    size={17} 
                />

              <div className="text c-primary-dark f-size-p3 f-weight-r">
                {name}
              </div>

            </div>

        <div className="chevron">
          <ChevronRight size={20} />
        </div>
      </li>
  );
};

export default MobileMainCategory;
