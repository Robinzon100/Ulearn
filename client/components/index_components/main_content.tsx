import React, { Fragment, useState } from "react";
import { ChevronDown,Star,Clock,Calendar } from "react-feather";

import InputSearch from "components/global_components/inputs/inputSearch";
import SelectInput from "components/global_components/inputs/selectInput";
import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/index_components/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import Categories from "components/categories"


//! JSON
import CategoriesJson from "../../public/json/categories.json"


const main_content: React.FC = () => {
    const [placeHolder, setPlaceHolder] = useState<string>(
        "მოძებნე სასურველი კურსი"
    );


    //! Example of localStorage Change CSS Colors
    // const checkNewCssVars = () => {
    //     console.log("click")
    //     let colorArray = [];
    //     const calendars = document.querySelectorAll('.colorChange');
    //     let color = "var(--secondary-dark-red)";
    //     calendars.forEach(calendar => {
    //         calendar.style.backgroundColor = color;
    //     })
    //     colorArray.push(color);

    //     localStorage.setItem('color', color);
    //     console.log('retrievedColor: ', color);
    //     console.log("array:"+colorArray)
    // }

    const [CardsJson, setCardsJson] = useState(PrimaryContentCardJson.contentCard)
    
    const [categoriesJson, setCategoriesJson] = useState(CategoriesJson.Categories)

    return (
        <Fragment>
            <div className="main_content">
                {/* //! კარუსელი */}

                <Carousel id={1} title={"ბიზნესი"} />

                {/* //! ინფუთები */}

                <div className="main_content--container">
                    
                <div className="category">
                <div className="category_heading">
                    <p className="heading-6 heading-bold-Noto">კატეგორიები</p>
                </div>
                    { 
                        categoriesJson.map((categories => (
                            <Categories
                            id={categories.id}
                            title={categories.title}
                            numberOfCourses={categories.numberOfCourses}
                            />
                        )))
                       
                    }
                </div>
                    
                    <div className="landing_courses">
                        <div className="main_content--input">
                            <InputSearch placeHolder={placeHolder} />

                            <div className="sorting">
                                <div className="sorting__video-date colorChange">
                                    <div className="calendar sorting_styles" id="calendar">
                                        <Calendar color="blue" size={16}/>
                                    </div>
                                    <div className="heading">
                                        <p className="paragraph-regular-Noto paragraph-medium-small">თარიღი</p>
                                    </div>
                                </div>
                                <div className="sorting__video-raiting colorChange">
                                    <div className="star sorting_styles">
                                        <Star color="yellow" size={16}/>
                                    </div>
                                    <div className="heading">
                                    <p className="paragraph-regular-Noto paragraph-medium-small">რეიტინგი</p>
                                    </div>
                                </div>
                                <div className="sorting__video-length colorChange">
                                    <div className="clock sorting_styles">
                                        <Clock color="red" size={16}/>
                                    </div>
                                    <div className="heading">
                                    <p className="paragraph-regular-Noto paragraph-medium-small">ხანგძლივობა</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="overlay_container">
                            <div className="wrapper">
                                <div className="see_more">
                                    <p className="heading-bold-Noto paragraph-biggest">
                                        იხილეთ მეტი
                                    </p>
                                </div>
                                <div className="see_more_arrow">
                                    {/* <img src="./pictures/courses/see_more_arrow.svg" alt="" /> */}
                                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                                </div>
                            </div>
                        </div>

                        <div className="landing_courses--cards">
                            {/* //! ეს არის მთავარი გვერდზე რაც კარტებია */}
                            
                            {CardsJson.map((card) => (
                                <PrimaryContentCard
                                    id={card.id}
                                    imageUrl={card.imageUrl}
                                    title={card.title}
                                    author={card.author}
                                    raiting={card.raiting}
                                    numberOfVotes={card.numberOfVotes}
                                    bestseller={card.bestseller}
                                    price={card.price}
                                    newPrice={card.newPrice}
                                    isLiked={card.isLiked}
                                    posted={card.posted}
                                    difficulty={card.difficulty}
                                    description={card.description}
                                    descriptionList={card.hoverCardList}
                                />

                            ))}

                        </div>
                    </div>


                </div>
                                
            </div>
        </Fragment>
    );
};

export default main_content;
