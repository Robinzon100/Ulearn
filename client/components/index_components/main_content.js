import React, { Fragment, useState } from 'react'
import { Search, Upload, ChevronDown, ChevronRight } from 'react-feather';

import InputSearch from "components/global_components/inputs/inputSearch";
import SelectInput from "components/global_components/inputs/selectInput";
import MainContentCard from "components/global_components/cards/MainCards";
import List from "components/global_components/categories_list/list";



export default function main_content() {
    const [placeHolder, setPlaceHolder] = useState("მოძებნე სასურველი კურსი")

    return (
        <Fragment>
            <div className="main_content">
                <div className="main_content--container">
                    <div className="categories">
                        <div className="categories__heading">
                            <p className="heading-bold-Noto heading-6">კატეგორიები</p>
                        </div>
                        
                        {/* //! ეს არის ლისტები მთავარ გვერძე რაც არის მარცხნივ */}
                        <List/>
                        <List/>
                        
                        </div>
                    <div className="courses">
                        <div className="overlay_container">
                            <div className="wrapper">
                                <div className="see_more">
                                    <p className="heading-bold-Noto paragraph-biggest">იხილეთ მეტი</p>
                                </div>
                                <div className="see_more_arrow">
                                    {/* <img src="./pictures/courses/see_more_arrow.svg" alt=""/> */}
                                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                                </div>
                            </div>


                        </div>
                        <div className="courses--input">

                            <InputSearch placeHolder={placeHolder} />

                            <div className="sorting">
                                <div className="sorting__heading">
                                    <p className="paragraph-regular-Noto paragraph-medium-small">დახარისხება:</p>
                                </div>
                                <div className="sorting__select">
                                    <SelectInput />

                                </div>
                            </div>
                        </div>
                        <div className="courses--cards">
                            {/* //! ეს არის მთავარი გვერდზე რაც კარტებია */}
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />
                            <MainContentCard />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
