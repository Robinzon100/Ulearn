import React, { Fragment, useState, useRef } from 'react'
import { motion } from "framer-motion";

import { ChevronRight } from 'react-feather';


export default function list({ title, subtitle }) {
    const [revealSubList, setRevealSubList] = useState(false)

    const [checkCheckBox, setCheckCheckBox] = useState(false)

    const ref = useRef();

    const handleReveal = () => {
        setRevealSubList((revealSubList) => !revealSubList);
        // debugger;
        // const currentRef = ref.current.childNodes;

        // if(currentRef.classList.contains)
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
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight />
                                </motion.div>

                            }



                        </div>
                        <div className="course-list--name">
                            <div className="title">
                                <p className="paragraph-regular-Noto paragraph-medium">{title}</p>
                                <div className="outside-list-check"></div>
                            </div>


                            <div className=
                                {revealSubList ?
                                    "inside_list clip-path-reveal" : "inside_list clip-path-hide"}>

                                <ul>
                                    <li>
                                        <p className="paragraph-regular-Noto paragraph-medium-small">{subtitle}</p>
                                        <div className="inside-list-check"></div>
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
