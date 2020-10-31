import React, { useState } from "react";
import { ChevronDown } from "react-feather";

import InputSearch from "components/global_components/inputs/inputSearch";
import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/index_components/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import Categories from "components/categories"


//! JSON
import CategoriesJson from "../../public/json/categories.json"
import SortingDropdown from './../sortingDropdown';


const main_content: React.FC = () => {
    const [placeHolder, setPlaceHolder] = useState<string>(
        "მოძებნე სასურველი კურსი"
    );

        
    const [toggleSeeMore, setToggleSeeMore] = useState(false);

    const [CardsJson, setCardsJson] = useState(PrimaryContentCardJson.contentCard)
    
    const [categoriesJson, setCategoriesJson] = useState(CategoriesJson.Categories)

    return (
        <>
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
                               <SortingDropdown type="date"/>
                               <SortingDropdown type="rating"/>
                               <SortingDropdown type="time"/>
                            </div>
                        </div>
                        {CardsJson.length > 2  ? !toggleSeeMore ?
                        <div className="overlay_container">
                            <div className="wrapper" onClick={() => setToggleSeeMore(true)}>
                                <div className="see_more" >
                                    <p className="heading-bold-Noto paragraph-biggest">
                                        იხილეთ მეტი
                                    </p>
                                </div>
                                <div className="see_more_arrow">
                                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                                </div>
                            </div>
                        </div>
                        :null
                        :null
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
