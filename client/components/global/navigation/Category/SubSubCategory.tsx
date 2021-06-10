import NextLink from "components/utils/nextLink/NextLink";





const SubSubCategory = ({ name, setSubCategoryId, id }) => {
  return (


    <NextLink
      route={`courses?m_i=${setSubCategoryId}&s_i=${id}`}
      className="list__sub-category--item  regular f-size-p6" >

      <li className="item" key={id}>
        <div className="item-container">
          <div className="item-container__cube-text">
            <div className="text">{name}</div>
          </div>
        </div>
      </li>

    </NextLink>


  );
};
export default SubSubCategory;
