import React, { useState } from "react";
import { motion } from "framer-motion";


interface selects {
    id: number,
}


const selectInput: React.FC<selects> = ({ id }, props) => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle((toggle) => !toggle);
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
        setProducts(e.target.value);
        setIsToggle(false);
    }
    //FRAMER ANIM
    const arrowAnimation = {
        open: {
            rotate: 0,
            transition: { duration: 0.3 }
        },
        closed:
        {
            rotate: [0, 180],
            transition: { duration: 0.2 }
        },
    }

    const dropDownAnimation = {
        open: {
            'height': '14rem',
            opacity: 1,
            'display': 'block',
            transition: { duration: 0.2 }
        },
        closed: {
            'height': '0rem',
            opacity: 0,
            'display': 'none',
            transition: {
                duration: 0.2
            }
        },
    }

    return (
        <>
            <div className="dropdown input-shadow input-shadow-onFocus"
                key={id}>
                <div className="dropdown-select">
                    <span className="select paragraph-regular-Noto paragraph-small">
                        {products}
                    </span>
                    <motion.img
                        src="./pictures/select_arrow.svg"
                        alt="arrow"
                        onClick={handleToggle}
                        variants={arrowAnimation}
                        animate={isToggle ? "closed" : "open"}
                    />

                </div>
                <motion.div
                    className="dropdown-list"
                    variants={dropDownAnimation}
                    initial={{ height: "0rem" }}
                    animate={isToggle ? "open" : "closed"}
                >
                    {selectProducts.map(product => (
                        <>

                            <div
                                className="dropdown-list__item"
                                key={product.id}
                            >
                                <input
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


                </motion.div>
            </div>
        </>
    );
}


export default selectInput;