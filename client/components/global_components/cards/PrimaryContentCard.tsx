import React, { useState, useEffect } from "react";
import { Star,Heart } from "react-feather";

import CardDetail from './CardDetail';


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
    descriptionList
}) => {
    // const [cardHoverJson, setCardHoverJson] = useState(hoverCards);

    const [addToFavorites, setAddToFavorites] = useState<boolean>(isLiked);

    const [checkNewPrice, setCheckNewPrice] = useState<boolean | number>(newPrice);

    const [hover, setHover] = useState<boolean | null>(false);

    const [isLastCard, setIsLastCard] = useState<boolean>(false);

    const [isBestSeller, setIsBestSeller] = useState<boolean>(bestseller)

    const handleAddFavorite = (e) => {
        // debugger
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
            if(heart.classList.contains("heart-background")) {
            heart.classList.remove('heart-background');

            }
        });
        e.currentTarget.classList.toggle("heart-background");

        setAddToFavorites((addToFavorites) => !addToFavorites);
    }


    const cardHoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setHover(true)

        if (((window.innerWidth / 2) - 40.5) < e.currentTarget.offsetLeft) {
            setIsLastCard(true);
        }

    }


    return (
        <div className="PrimaryContentCard"
            key={id}
            onMouseEnter={(e) => cardHoverHandler(e)}
            onMouseLeave={() => setHover(null)}
        >
            {
                
                hover &&
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

            <a href="#">
                <div className="PrimaryContentCard__img" style={{ backgroundImage: `url(${imageUrl})` }}>
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
                <p className="heading-bold-Noto paragraph-medium-small">{title}</p>
            </div>
            </a>
            <div className="PrimaryContentCard__raiting">
                <div className="PrimaryContentCard__raiting--container">
                    <div className="star">
                        <Star style={{ fill: "#FFD703", color: "#FFD703" }} size={16} />
                    </div>
                    <div className="numbers">
                        <p className="Eina-semibold paragraph-small">
                            {raiting} ({numberOfVotes})
                        </p>
                    </div>
                </div>
                <div className="PrimaryContentCard__raiting--name">
                    <a href="#">
                        <p className="heading-semi-bold-Noto  paragraph-small">{author}
                        </p>
                    </a>
                </div>
            </div>
            <div className="PrimaryContentCard__like">
                <label className={isBestSeller ? "label heading-semi-bold-Noto paragraph-smallest-small" : null} >
                    {isBestSeller ? <p>ბესტსელერი</p> : null}
                </label>

                <div
                    className={addToFavorites ? "full-heart-svg heart heart-background" : "stroke-heart-svg heart"}
                    onClick={(e) =>  handleAddFavorite(e)}
                >
                    
                 </div>
            </div>
        </div>
    );
};

export default PrimaryContentCard;
