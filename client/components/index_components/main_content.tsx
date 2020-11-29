import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";

import InputSearch from "components/global_components/inputs/inputSearch";
import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/index_components/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import Categories from "components/categories";
import SortingDropdown from "./../sortingDropdown";
import { seeMoreAnimation } from "components/utils/framer/framerAnimation";
import { mouseDown,mouseMove,mouseLeave,mouseUp,sideScroll} from "components/index_components/carousel/carouselLogic";
import {checkIfScrollFinished} from "components/hooks/checkIfFinishedScrolling";

//! JSON
import CategoriesJson from "../../public/json/categories.json";
import CarouselJson from "../../public/json/carousel.json";

const main_content: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("მოძებნე სასურველი კურსი");
  const [toggleSeeMore, setToggleSeeMore] = useState(false);

  //* CAROUSEL STATES
  const [isDown, setIsDown] = useState<boolean>(false);
  const [isFinishedScrolling, setIsFinishedScrolling] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrolLeft, setScrolLeft] = useState<number>(0);
  

  //* JSON
  const [CardsJson, setCardsJson] = useState(PrimaryContentCardJson.contentCard);
  const [categoriesJson, setCategoriesJson] = useState(CategoriesJson.Categories);
  const [carouselJson, setCarouselJson] = useState(CarouselJson.carousel);


  const scrollRight = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "right", 25, 800, 50,setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP

    
    checkIfScrollFinished(setIsFinishedScrolling,isFinishedScrolling);

  };
  const scrollLeft = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "left", 25, 800, 50,setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP
    };

  return (
    <>
      <div className="main_content">
        {/* //! კარუსელი */}
        <div className="carousel noselect">
          {/* // TODO  გააჯმეინე image tags aqedan */}
            <div className="right_slider_btn" onClick={() => scrollRight()}>
              <Image
                src="/pictures/slider/rigth_slide_button.svg"
                alt="slider_btn"
                width={250}
                height={100}
                quality={50}
              />
            </div>
          
          <div
            className="carousel_container"
            onMouseDown={(e) => mouseDown(e, setIsDown, setStartX, setScrolLeft)}
            onMouseLeave={() => mouseLeave(setIsDown)}
            onMouseUp={() => mouseUp(setIsDown)}
            onMouseMove={(e) =>mouseMove(e, isDown, startX, scrolLeft, setIsFinishedScrolling,isFinishedScrolling)}
          >
            {carouselJson.map((data) => (
              <Carousel
                key={data.id}
                id={data.id}
                title={data.title}
                imageUrl={data.imageUrl}
              />
            ))}
          </div>
          {isFinishedScrolling && (
            <div className="left_slider_btn" onClick={() => scrollLeft()}>
              <Image
                src="/pictures/slider/rigth_slide_button.svg"
                alt="slider_btn"
                width={250}
                height={100}
                quality={50}
              />
            </div>
          )}
        </div>

        {/* //! ინფუთები */}

        <div className="main_content--container">
          <div className="category">
            <div className="category_heading">
              <p className="heading-6 heading-bold">კატეგორიები</p>
            </div>
            {categoriesJson.map((categorie) => (
              <Categories
                key={categorie.id}
                id={categorie.id}
                title={categorie.title}
                numberOfCourses={categorie.numberOfCourses}
              />
            ))}
          </div>

          <div className="landing_courses">
            <div className="main_content--input">
              <InputSearch id={1} placeHolder={placeHolder} />

              <div className="sorting">
                <SortingDropdown type="date" />
                <SortingDropdown type="raiting" />
                <SortingDropdown type="time" />
              </div>
            </div>
            {CardsJson.length > 2 && (
              <motion.div
                className="overlay_container"
                variants={seeMoreAnimation}
                initial={{ height: "0rem" }}
                animate={!toggleSeeMore ? "open" : "closed"}
              >
                <div className="wrapper" onClick={() => setToggleSeeMore(true)}>
                  <div className="see_more">
                    <p className="heading-bold paragraph-biggest">
                      იხილეთ მეტი
                    </p>
                  </div>
                  <div className="see_more_arrow">
                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                  </div>
                </div>
              </motion.div>
            )}

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
