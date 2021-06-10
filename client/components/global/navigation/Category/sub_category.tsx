import { ChevronRight } from "react-feather";
import NextLink from "components/utils/nextLink/NextLink";




const sub_category = ({
  handleFetchSubCategoryClick,
  setIsSubCategoryChosen,
  setIsMouseleftSubSubCategory,
  id,
  name,
  mainCategoryId }) => {
  return (
    <>
      <NextLink
        route={`courses?m_i=${mainCategoryId}&s_i=${id}`}
        className="list--items__links  regular f-size-p6">

        <li
          key={id}
          className="list__sub-sub-category--item"
          onMouseEnter={() => {
            handleFetchSubCategoryClick(mainCategoryId);
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
    </>
  );
};
export default sub_category;
