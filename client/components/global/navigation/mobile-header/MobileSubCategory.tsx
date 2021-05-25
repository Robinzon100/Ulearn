// import { ChevronRight } from "react-feather";

import NextLink from "components/utils/nextLink/NextLink";


const MobileSubCategory = (
  {
    handleFetchSubCategoryClick,
    setIsSubCategoryChosen,
    id,
    name,
  },
  props
) => {
  return (
    <>
      <li
        className="sub-category-list--item"
        key={props.key}
        onClick={() => {
          handleFetchSubCategoryClick(id);
          setIsSubCategoryChosen(true)
        }}
      >
        <NextLink route="#" className="link">
          <p className="c-primary-dark f-size-p3 f-weight-r">{name}</p>
        </NextLink>

        {/* <div className="chevron">
          <ChevronRight size={20} />
        </div> */}
      </li>
    </>
  );
};

export default MobileSubCategory;
