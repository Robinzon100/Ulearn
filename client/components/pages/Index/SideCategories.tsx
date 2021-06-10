
import NextLink from "components/utils/nextLink/NextLink";

export interface Categories {
  categories:any
}

const SideCategories: React.FC<Categories> = ({ categories }) => {
  return (
    <>
      <div className="category_container">
        <ul>
          <li className="category_main--name categoryAll">
            <NextLink route="/#" className="f-size-p4">
              ყველა
            </NextLink>
            <div className="category_main--number">
              <p className="f-size-p7">20</p>
            </div>
          </li>

          {categories.main_categories?.map((data) => (
            
              <li className="category_main--name category_main" key={data.id}>
                <NextLink route="/#" className="f-size-p4">
                  {data.name}
                </NextLink>

                <div className="category_main--number">
                  <p className="f-size-p7">20</p>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideCategories;
