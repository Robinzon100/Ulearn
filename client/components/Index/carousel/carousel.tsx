import { useState, memo } from "react";
import NextLink from "components/utils/NextLink";
import Image from "next/image";
import { motion } from "framer-motion";

import {mouseDown,mouseMove,mouseLeave,mouseUp,sideScroll} from "components/Index/carousel/carouselLogic";
import { checkIfScrollFinished } from "components/hooks/checkIfFinishedScrolling";
import { CarouselInterface } from "./../../../interfaces/carousel.interface";

const carousel: React.FC<CarouselInterface> = ({ carouselJson }) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [isFinishedScrolling, setIsFinishedScrolling] = useState<boolean>(
    false
  );
  const [startX, setStartX] = useState<number>(0);
  const [scrolLeft, setScrolLeft] = useState<number>(0);

  const scrollRight = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "right", 25, 800, 50, setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP

    checkIfScrollFinished(setIsFinishedScrolling, isFinishedScrolling);
  };
  const scrollLeft = () => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    sideScroll(carousel, "left", 25, 800, 50, setIsFinishedScrolling); //* ELEMENT,DIRECTION,SPEED,DISTANCE,STEP
  };

  return (
    <>
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
          {carouselJson.map((data) => (
            <NextLink route="/#" className="carousel_card" key={data.id}>
              <div
                className="carousel_card--pic"
                style={{ backgroundImage: `url(${data.imageUrl})` }}
              ></div>
              <div className="carousel_card--heading">
                <p className="bold paragraph-regular">{data.title}</p>
              </div>
            </NextLink>
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
    </>
  );
};

export default memo(carousel);
