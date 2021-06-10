import { ChevronRight } from "react-feather";
import NextLink from 'components/utils/nextLink/NextLink';



const Category = ({ handleFetchMainCategory, setIsMainCategoryChosen, id, name }, props) => {

  return (
    <>
      <NextLink
        route={`courses?m_i=${id}`}
        className="list--items__links  f-size-p6">
        <li
          key={props.key}
          className="list__main-category--item"
          onMouseEnter={() => {
            handleFetchMainCategory(id);
            setIsMainCategoryChosen(true)
          }}>
          <div className="item-container">
            <div className="item-container__cube-text">
              <div className="cube"></div>
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

export default Category;
