import React from 'react'

import { Categories } from '../../interfaces/categories.inteface';
import NextLink from "components/utils/NextLink";




const categoriesComponent: React.FC<Categories> = ({CategoriesJson}) => {
    return (
        <>
        {CategoriesJson.map(data =>(

        
            <div className="category_container" key={data.id}>
                <div className={data.id  == 1 ? "category_main categoryAll" : "category_main category_sub"}>
                    <div className="category_main--name">
                        <NextLink route="/#" className={"paragraph-regulars paragraph-regular"}>
                            {data.title}
                        </NextLink>
                    </div>
                    <div className="category_main--number">
                        <p className="Eina-semibold paragraph-smallest">{data.numberOfCourses}</p>
                    </div>

                </div>

            </div>
            ))}
        </>
    )
}

export default categoriesComponent;