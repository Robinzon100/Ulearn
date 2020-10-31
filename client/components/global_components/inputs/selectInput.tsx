import React, { useState } from "react";
import { motion } from "framer-motion";

interface selects {
    id:number,
}


const selectInput:React.FC<selects> = ({id},props) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((toggle) => !toggle);
    };

    const selectProducts = [
        {
            id: 1,
            name: "ვაშლი",

        },
        {
            id: 2,
            name: "მსხალი",

        },
        {
            id: 3,
            name: "ბანანი",

        }
    ]
    const [products, setProducts] = useState<any>(selectProducts[0].name)

    const handleSelect = (e) => {
        const openedContainer = document.querySelector(".dropdown-list");
        const toggleArrow = document.querySelector('.toggleArrow')

        toggleArrow.classList.remove("animatedArrow");
        openedContainer.classList.remove("dropdown_animation");
        setProducts(e.target.value);
        setToggle(false);
        
    }
    
    return (
        <>
            <div className="dropdown input-shadow input-shadow-onFocus" 
            key={id}>
                <div className="dropdown-select">
                    <span className="select paragraph-regular-Noto paragraph-small">
                        {products}
                    </span>
                    <img
                            src="./pictures/select_arrow.svg"
                            alt="arrow"
                            onClick={handleToggle}
                            
                            className={toggle ? "toggleArrow animatedArrow" : "toggleArrow"  }
                        />
                    
                </div>
                <div
                    className={
                        toggle ? "dropdown-list dropdown_animation" : "dropdown-list"
                    }

                >
                    {selectProducts.map((product, i) => (
                        <>

                            <div 
                            className="dropdown-list__item"
                            key={i}
                            >
                                <input
                                    key={product.id}
                                    value={product.name}
                                    id={product.name}
                                    onChange={handleSelect}
                                    checked={products === product.name}
                                    type="radio"
                                    className="radio"
                                />
                                <label
                                className="paragraph-regular-Noto paragraph-smallest"
                                    htmlFor={product.name}
                                >
                                    {product.name}
                                </label>
                            </div>

                        </>
                    ))}


                </div>
            </div>
        </>
    );
}


export default selectInput;