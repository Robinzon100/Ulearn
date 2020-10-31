import React from "react";
import { CarouselInterface } from './../../../interfaces/carousel.interface';



const carousel: React.FC<CarouselInterface> = ({ id, imageUrl, title }, props) => {
    return (
        <>

            <div className="carousel_card" key={props.key}>
                <div className="carousel_card--pic" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="carousel_card--heading">
                    <p className="heading-bold-Noto paragraph-regular">{title}</p>
                </div>
            </div>
            

        </>
    );
};

export default carousel;
