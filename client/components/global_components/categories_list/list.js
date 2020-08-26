import React, { Fragment, useState, useRef } from 'react'
import { motion } from "framer-motion";

import { ChevronRight } from 'react-feather';


export default function list({ title, subtitle }) {
    const [revealSubList, setRevealSubList] = useState(false)

    const [checkBox, setCheckBox] = useState(false)

   

    const ref = useRef();

    const handleReveal = () => {
        setRevealSubList((revealSubList) => !revealSubList);
        // debugger;
        // const currentRef = ref.current.childNodes;

        // if(currentRef.classList.contains)
    }

    const handleSetCheckBox = () => {
        // debugger;
        // const sideMenuCheckbox = document.getElementsByClassName("side-menu-checkbox");
        // const outsideListCheck = document.getElementsByClassName("outside-list-check");

        // const sideMenuCheckbox = ref.current;
        // const outsideListCheck = ref.current;

        // if(sideMenuCheckbox.classList.contains("checked-checkbox")) {
        //     outsideListCheck.classList.remove("checked-checkbox");
        //     outsideListCheck.classList.add("outside-list-check");
           
        // }else {
        //     outsideListCheck.classList.add("checked-checkbox");
        //     outsideListCheck.classList.remove("outside-list-check");
        // }


        // outsideListCheck.classList.add("checked-checkbox");
        // outsideListCheck.classList.remove("outside-list-check");
        
        setCheckBox((checkBox) => !checkBox);
    }



    return (
        <Fragment>
            <div className="list">
                <div className="list__container">
                    <div className="course-list">
                        <div className="course-list--arrow">


                            {revealSubList ?
                                <motion.div
                                    onClick={handleReveal}
                                    animate={{ rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight />
                                </motion.div>

                                :
                                <motion.div
                                    onClick={handleReveal}
                                    animate={{ rotate: 0 }}
                                    
                                >
                                    <ChevronRight />
                                </motion.div>

                            }



                        </div>
                        <div className="course-list--name">
                            <div id="uniqueTitle" className="title">
                                <p className="paragraph-regular-Noto paragraph-medium">{title}</p>
                                {/* //! side menu checkbox changing */}
                                <div ref={ref}  className={checkBox ? "checked-checkbox" : "side-menu-checkbox" } onClick={handleSetCheckBox}></div>
                            </div>


                            <div className=
                                {revealSubList ?
                                    "inside_list clip-path-reveal" : "inside_list clip-path-hide"}>

                                <ul>
                                    <li>
                                        <p className="paragraph-regular-Noto paragraph-medium-small">{subtitle}</p>
                                        <div ref={ref} className="outside-list-check"></div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                  


                </div>

            </div>
        </Fragment>
    )
}
