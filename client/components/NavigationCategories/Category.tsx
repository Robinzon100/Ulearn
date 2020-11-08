import React,{useState} from 'react'
//! ─── INTERFACE────────────────────────────────────────────────────────────────────
import { Categories } from '../../interfaces/MainCategory.interface';

import MainCategory from "public/json/MainCategory.json";

const Category:React.FC<Categories> = ({categoryTitle,SubCategories}) => {
    return (
        <>
            <p>{categoryTitle}</p>
            {/* <p>{SubCategories.map(subs =?)}</p> */}
            
        </>
    )
}


export default Category;