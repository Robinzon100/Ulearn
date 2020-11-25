import React from "react";
import { CarouselInterface } from "./../../../interfaces/carousel.interface";
import NextLink  from "components/utils/NextLink";

const carousel: React.FC<CarouselInterface> = (
  { id, imageUrl, title },
  props
) => {
  return (
    <>
      
        <div className="carousel_card" key={props.key}>
          <div className="carousel_card--pic" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <div className="carousel_card--heading">
            <p className="heading-bold paragraph-regular">{title}</p>
          </div>
        </div>
      
    </>
  );
};

export default carousel;
