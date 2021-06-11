import { ChevronRight } from "react-feather";






const MobileMainCategory = (
  { id, name, handleFetchMainCategory, setIsMainCategoryChosen },
  props
) => {
  return (
      <li
        className="main-category-list--item"
        key={props.key}
        onClick={() => {
          handleFetchMainCategory(id);
          setIsMainCategoryChosen(true);
        }}>
        
        <p className="c-primary-dark f-size-p3 f-weight-r">{name}</p>

        <div className="chevron">
          <ChevronRight size={20} />
        </div>
      </li>
  );
};

export default MobileMainCategory;
