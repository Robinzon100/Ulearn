
import NextLink from "components/utils/nextLink/NextLink";

const MobileSubCategory = ({
  handleFetchSubCategoryClick,
  setIsSubCategoryChosen,
  id,
  name,
  mainCategoryId,
}) => {
  return (
    <NextLink route={`courses?m_i=${id}`} 
    className="link sub-category-list--item">
      <li
        className="item"
        key={id}
        onClick={() => {
          handleFetchSubCategoryClick(mainCategoryId);
          setIsSubCategoryChosen(true);
        }}>
        <p className="c-primary-dark f-size-p3 f-weight-r">{name}</p>

      </li>
    </NextLink>
  );
};

export default MobileSubCategory;
