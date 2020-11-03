import React, { useState } from "react";
import Image from 'next/image';
import { ChevronDown } from "react-feather";

import InputSearch from "components/global_components/inputs/inputSearch";
import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/index_components/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import Categories from "components/categories"
import SortingDropdown from './../sortingDropdown';

//! JSON
import CategoriesJson from "../../public/json/categories.json"
import CarouselJson from "../../public/json/carousel.json";

const main_content: React.FC = () => {
    const [placeHolder, setPlaceHolder] = useState<string>(
        "მოძებნე სასურველი კურსი"
    );


    const [toggleSeeMore, setToggleSeeMore] = useState(false);

    const [CardsJson, setCardsJson] = useState(PrimaryContentCardJson.contentCard);

    const [categoriesJson, setCategoriesJson] = useState(CategoriesJson.Categories);

    const [carouselJson, setCarouselJson] = useState(CarouselJson.carousel);

    return (
        <>
            <div className="main_content">
                {/* //! კარუსელი */}
                <div className="carousel noselect">
                    <div className="right_slider_btn">
                        <Image 
                        src="/pictures/slider/rigth_slide_button.svg" 
                        alt="slider_btn"
                        width={250}
                        height={100}
                        quality={50}
                        />
                    </div>
                    <div className="container" >
                    {
                            carouselJson.map(data => (
                                <Carousel
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    imageUrl={data.imageUrl}
                                />
                            ))
                        }
                    </div>
                    <div className="left_slider_btn"></div>
                </div>



                {/* //! ინფუთები */}

                <div className="main_content--container">

                    <div className="category">
                        <div className="category_heading">
                            <p className="heading-6 heading-bold">კატეგორიები</p>
                        </div>
                        {
                            categoriesJson.map(categorie => (
                                <Categories
                                    key={categorie.id}
                                    id={categorie.id}
                                    title={categorie.title}
                                    numberOfCourses={categorie.numberOfCourses}
                                />
                            ))

                        }
                    </div>

                    <div className="landing_courses">
                        <div className="main_content--input">
                            <InputSearch id={1} placeHolder={placeHolder} />

                            <div className="sorting">
                                <SortingDropdown type="date" />
                                {/* <SortingDropdown type="rating" />
                                <SortingDropdown type="time" /> */}
                            </div>
                        </div>
                        {CardsJson.length > 2 ? !toggleSeeMore ?
                            <div className="overlay_container">
                                <div className="wrapper" onClick={() => setToggleSeeMore(true)}>
                                    <div className="see_more" >
                                        <p className="heading-bold paragraph-biggest">
                                            იხილეთ მეტი
                                    </p>
                                    </div>
                                    <div className="see_more_arrow">
                                        <ChevronDown size={40} style={{ color: "#00E267" }} />
                                    </div>
                                </div>
                            </div>
                            : null
                            : null
                        }


                        <div className="landing_courses--cards">
                            {/* //! ეს არის მთავარი გვერდზე რაც კარტებია */}

                            {CardsJson.map((card) => (
                                <PrimaryContentCard
                                    key={card.id}
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
        </>
    );
};

export default main_content;
