import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Star, Heart } from "react-feather";

import CardDetail from './CardDetail';
import { stringToCut } from "components/utils/stringCut";

//! ==================INTERFACE
import { PrimaryContentCards } from "../../../interfaces/PrimaryContentCard.interface";


const PrimaryContentCard: React.FC<PrimaryContentCards> = ({
    id,
    price,
    title,
    author,
    raiting,
    bestseller,
    newPrice,
    numberOfVotes,
    imageUrl,
    isLiked,
    posted,
    difficulty,
    description,
    descriptionList,

}) => {


    const [addToFavorites, setAddToFavorites] = useState<boolean>(isLiked);

    const [checkNewPrice, setCheckNewPrice] = useState<boolean | number>(newPrice);

    const [isClicked, setIsClicked] = useState<boolean | null>(false);

    const [isLastCard, setIsLastCard] = useState<boolean>(false);

    const [isBestSeller, setIsBestSeller] = useState<boolean>(bestseller);

    const [isVisible, setIsVisible] = useState<boolean>(false);


    const handleAddFavorite = (e) => {
        // debugger
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
            if (heart.classList.contains("heart-background")) {
                heart.classList.remove('heart-background');

            }
        });
        e.currentTarget.classList.toggle("heart-background");

        setAddToFavorites((addToFavorites) => !addToFavorites);
    }


    const cardHoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (((window.innerWidth / 2) - 40) < e.currentTarget.parentElement.offsetLeft) {
            setIsLastCard(true);
        }
        setIsClicked((isClicked) => !isClicked);

    }

    //! ეს გვეხმარება რომ როცა ჰოვერი მოხდება კარტა და ღილაღი გაქრეს!
    const handleHoverLeave = () => {
        setIsClicked(null);
        setIsVisible(false);
    }

    //TODO ტელეფონზე რამენაირად უნდა ქნა რომ ერთს რომმ დააჭერს მეორე გაქრეს,თუ მეორე 
    //ჩართულაი
    // const handleCardClick = (e) => {
    //     const card_details = document.querySelectorAll(".card_detail-display");

    //     card_details.forEach(detail => {
    //         if (detail.classList.contains('card_detail-display')) {
    //             detail.classList.remove('card_detail-display')
               
    //         }
    //     })
    //     // debugger
    //     e.currentTarget.classList.toggle('card_detail');
    // }

    return (
        <div className="PrimaryContentCard"
            key={id}
            onMouseLeave={handleHoverLeave}
        >
            <a href="#">
                <div className="PrimaryContentCard__img"
                    style={{ backgroundImage: `url(${imageUrl})` }}

                >
                    <div className="price-tag">
                        {checkNewPrice && (
                            <div className="removed-price-tag">
                                <p className="Eina-semibold paragraph-big">
                                    {newPrice}
                                    <span style={{ color: "#00E267", fontWeight: "bold" }}>
                                        &#8382;
                                    </span>
                                </p>
                            </div>
                        )}

                        <div className="normal-price">
                            <p className="Eina-semibold paragraph-big">
                                {price}
                                <span style={{ color: "#00E267", fontWeight: "bold" }}>
                                    &#8382;
                                </span>
                            </p>
                        </div>
                    </div>

                </div>


                <div className="PrimaryContentCard__title">
                    <p className="heading-bold-Noto paragraph-medium-small"
                        title={title}>{stringToCut(title, 50)}</p>
                </div>
            </a>
            <div className="course_card_hover_logo course_card_hover_logo_mobile"
                onClick={(e) => cardHoverHandler(e)}>
                
                <div className={isClicked ? "card_detail" : "card_detail-display"}
                >
                    {

                        <CardDetail
                            id={id}
                            title={title}
                            imageUrl={imageUrl}
                            posted={posted}
                            difficulty={difficulty}
                            description={description}
                            descriptionList={descriptionList}
                            isLastCard={isLastCard}

                        />
                    }
                </div>
            </div>
            <div className="PrimaryContentCard__raiting">
                <div className="PrimaryContentCard__raiting--container">
                    <div className="star">
                        <Star key={id} style={{ fill: "#FFD703", color: "#FFD703" }} size={16} />
                    </div>
                    <div className="numbers">
                        <p className="Eina-semibold paragraph-medium-small">
                            {raiting} <span style={{ opacity: "50%" }} className=" Eina-semibold paragraph-small">({numberOfVotes})</span>
                        </p>
                    </div>
                </div>
                <div className="PrimaryContentCard__raiting--name">
                    <a href="#">
                        <p className="paragraph-regular-Noto paragraph-medium-small">{stringToCut(author, 25)}
                        </p>
                    </a>
                </div>
            </div>
            <div className="PrimaryContentCard__like">
                <label className={isBestSeller ? "label paragraph-regular-Noto  paragraph-smallest" : null} >
                    {isBestSeller ? <p>ბესტსელერი</p> : null}
                </label>

                <div
                    className={addToFavorites ? "full-heart-svg heart heart-background" : "stroke-heart-svg heart"}
                    onClick={handleAddFavorite}
                >

                </div>
            </div>
        </div>
    );
};

export default PrimaryContentCard;
