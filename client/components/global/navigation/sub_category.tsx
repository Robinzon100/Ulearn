import { ChevronRight } from "react-feather";
import NextLink from "components/utils/NextLink";

const sub_category = ({handleFetchSubCategoryClick,setIsSubCategoryChosen,setIsMouseleftSubSubCategory,id,name,},props) => {
  return (
    <>
    <li
        key={props.key}
        className="list__sub-sub-category--item"
        onMouseEnter={() => {
          handleFetchSubCategoryClick(id);
          setIsSubCategoryChosen(true);
          setIsMouseleftSubSubCategory(true);
        }}>
        <div className="item-container">
          <div className="item-container__cube-text">
            <div className="text">
              <NextLink
                route=""
                className="list--items__links  regular f-size-p6">
                {name}
              </NextLink>
            </div>
          </div>
          <div className="item-container__chevron">
            <ChevronRight size={25} />
          </div>
        </div>
      </li>
    </>
  );
};
export default sub_category;
