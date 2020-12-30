import { useState, memo } from "react";
import NextLink from "components/utils/NextLink";
import Image from "next/image";
import { motion } from "framer-motion";

import {mouseDown,mouseMove,mouseLeave,mouseUp,sideScroll} from "components/Index/carousel/carouselLogic";
import { checkIfScrollFinished } from "components/hooks/checkIfFinishedScrolling";
import { CarouselInterface } from "./../../../interfaces/carousel.interface";

const carousel: React.FC<CarouselInterface> = ({ carouselJson,CarouselImgs }) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [isFinishedScrolling, setIsFinishedScrolling] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrolLeft, setScrolLeft] = useState<number>(0);

  const scrollRight = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "right", 25, 800, 50, setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP
  };
  const scrollLeft = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "left", 25, 800, 50, setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP
  };

  return (
    <>
      <div className="carousel noselect">
        
        {!isFinishedScrolling && (
        <div  className="right-carousel-gradient arrow_btns_gradient" onClick={() => scrollRight()}>
          
          <div className="arrow_btns right_slider_btn"></div>
        </div>
        )}
        <div
          className="carousel_container"
          onMouseDown={(e) => mouseDown(e, setIsDown, setStartX, setScrolLeft)}
          onMouseLeave={() => mouseLeave(setIsDown)}
          onMouseUp={() => mouseUp(setIsDown)}
          onMouseMove={(e) =>
            mouseMove(
              e,
              isDown,
              startX,
              scrolLeft,
              setIsFinishedScrolling,
              isFinishedScrolling
            )
          }
        >
          {carouselJson?.map((data) => (
            <NextLink route="/#" className="carousel_card" key={data.id}>
               <div
                className="carousel_card--pic"
                style={{ backgroundImage: `url('/pictures/slider/${data.name.trim(" ")}.jpg')` }}
              ></div> 
              <div className="carousel_card--heading">
                <p className="bold f-size-p5">{data.name}</p>
              </div>
            </NextLink>
          ))}
        </div>
        {isFinishedScrolling && (
          <div className="left-carousel-gradient arrow_btns_gradient" onClick={() => scrollLeft()}>
            
          <div  className="arrow_btns left_slider_btn"></div>

          </div>
        )}
      </div>
    </>
  );
};

export default memo(carousel);
