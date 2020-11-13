import React, { useState,Fragment } from 'react'
import { ChevronRight } from "react-feather";
//! ─── INTERFACE────────────────────────────────────────────────────────────────────
// import { Categories } from '../../interfaces/MainCategory.interface';
import MainCategory from "public/json/MainCategory.json";



const Category = ({ categories }) => {
    return (
        <>
            <ul className="list">
                {MainCategory.main_categories.map(category => (
                    <Fragment key={category.id}>
                    <li className="list--items">
                        <div className="list--items__cube-text">
                            <div className="cube"></div>
                            <div className="text">
                                <a href="#" className="list--items__links paragraph-regulars paragraph-small">
                                    {category.name}
                                </a>
                            </div>
                        </div>


                        <div className="list--items__chevron">
                            <ChevronRight size={25} />
                        </div>
                        
                    </li>
                    <li>
                    {
                        category.sub_categories &&
                        category.sub_categories.map(data => (
                                <p>{data.name}</p>
                        ))
                        
                    }
                    </li>
                    </Fragment>
                ))}
            </ul>


        </>
    )
}


export default Category;