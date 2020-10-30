import React from 'react'

import { Categories } from './../interfaces/categories.inteface';




const categories: React.FC<Categories> = ({id,title,numberOfCourses},props) => {
    return (
        <>
        <div className="category_container" key={props.key}>
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