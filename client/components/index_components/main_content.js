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
                            <p className="heading-bold-Noto heading-6">აირჩიე კატეგორიები</p>
                        </div>

                        {/* //! ეს არის ლისტები მთავარ გვერძე რაც არის მარცხნივ */}
                        <List />
                        {/* <List /> */}

                    </div>
                    <div className="courses">
                        <div className="overlay_container">
                            <div className="wrapper">
                                <div className="see_more">
                                    <p className="heading-bold-Noto paragraph-biggest">იხილეთ მეტი</p>
                                </div>
                                <div className="see_more_arrow">
                                    {/* <img src="./pictures/courses/see_more_arrow.svg" alt="" /> */}
                                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                                </div>
                            </div>


                        </div>
                        <div className="courses--input">

                            <InputSearch placeHolder={placeHolder} />

                            <div className="sorting">
                                {/* <div className="sorting__heading">
                            <p className="paragraph-regular-Noto paragraph-medium-small">დახარისხება:</p>
                        </div> */}
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


                {/* <div className="video-files">
            <div className="video-files__icon">
                <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45.7392 35.3447C45.7392 36.5164 45.2573 37.6402 44.3995 38.4687C43.5418 39.2973 42.3784 39.7627 41.1653 39.7627H4.57392C3.36084 39.7627 2.19745 39.2973 1.33967 38.4687C0.481894 37.6402 0 36.5164 0 35.3447V4.41808C0 3.24633 0.481894 2.12258 1.33967 1.29403C2.19745 0.465475 3.36084 0 4.57392 0H14.4341C15.4201 0 16.3431 0.484464 16.9031 1.29592L19.6882 5.3312C20.2483 6.14266 21.1713 6.62712 22.1572 6.62712H41.1653C42.3784 6.62712 43.5418 7.0926 44.3995 7.92115C45.2573 8.7497 45.7392 9.87346 45.7392 11.0452V35.3447Z"
                        fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="-5.33124e-07" y1="1.52703" x2="44.375" y2="41.2854"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#EBEBEB" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="video-files__link">
                <a href="#" className="btn-for-video-files heading-bold-Noto paragraph-regular">ვიდეოს ფაილები</a>
            </div>

        </div> */}

            </div>
        </Fragment>
    )
}
