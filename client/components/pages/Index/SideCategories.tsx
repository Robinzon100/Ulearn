import NextLink from "components/utils/nextLink/NextLink";



export interface Categories {
  categories: any;
}




const SideCategories: React.FC<Categories> = ({ categories }) => {
  return (
      <div className="category_container">
        <ul>
        {/* <NextLink route="/courses" className="f-size-p4">

          <li className="category_main--name categoryAll">
            <p className="f-size-p4">ყველა</p>
              
            <div className="category_main--number">
              <p className="f-size-p7">20</p>
            </div>
          </li>
        </NextLink> */}


          {categories.main_categories?.map((data) => (
            <NextLink
              route={`/courses?m_i=${data.id}`}
              key={data.id}
              className="f-size-p4 category_main--name">


              <li className="names category_main">
                {data.name}

                {/* <div className="category_main--number">
                  <p className="f-size-p7">20</p>
                </div> */}
              </li>
            </NextLink>
          ))}
        </ul>
      </div>
  );
};

export default SideCategories;
