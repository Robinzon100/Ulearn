import { ChevronRight } from "react-feather";
import NextLink from "components/utils/nextLink/NextLink";




const SubCategory = ({
  handleFetchSubCategory,
  setIsSubCategoryChosen,
  setIsMouseleftSubSubCategory,
  id,
  name,
  mainCategoryId }) => {
  return (
      <NextLink
        route={`courses?m_i=${mainCategoryId}&s_i=${id}`}
        className="list__sub-sub-category--item  regular f-size-p6">
        <li
         key={id}
          className="item"
          onMouseEnter={() => {
            handleFetchSubCategory(mainCategoryId);
            setIsSubCategoryChosen(true);
            setIsMouseleftSubSubCategory(true);
          }}>
          <div className="item-container">
            <div className="item-container__cube-text">
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
  );
};
export default SubCategory;
