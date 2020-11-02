import React from 'react'

import { Categories } from './../interfaces/categories.inteface';




const categories: React.FC<Categories> = ({id,title,numberOfCourses}) => {
    return (
        <>
        <div className="category_container" key={id}>
                    <div className={id == 1 ? "category_main categoryAll" : "category_main category_sub"}>
                        <div className="category_main--name">
                            <p className="paragraph-regular-Noto paragraph-regular">
                                {title}
                            </p>
                        </div>
                        <div className="category_main--number">
                            <p className="Eina-semibold paragraph-smallest">{numberOfCourses}</p>
                        </div>

                    </div>
                    
                </div>
        </>
    )
}

export default categories;