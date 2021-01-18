import React, { useState, useRef,memo } from "react";
import Image from "next/image";
import { Star } from "react-feather";

//! ==================OUR IMPORTS
import { PrimaryContentCards } from "../../../interfaces/PrimaryContentCard.interface";
import CardDetail from "./CardDetail";
import { stringToCut } from "components/utils/stringToCut";
import NextLink  from "components/utils/NextLink";

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
  const ref = useRef();
  const [addToFavorites, setAddToFavorites] = useState<boolean>(isLiked);

  const [checkNewPrice, setCheckNewPrice] = useState<boolean | number>(newPrice);

  const [isClicked, setIsClicked] = useState<boolean | null>(false);

  const [isLastCard, setIsLastCard] = useState<boolean>(false);

  const [isBestSeller, setIsBestSeller] = useState<boolean>(bestseller);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleAddFavorite = (e) => {
    // debugger
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      if (heart.classList.contains("heart-background")) {
        heart.classList.remove("heart-background");
      }
    });
    e.currentTarget.classList.toggle("heart-background");

    setAddToFavorites((addToFavorites) => !addToFavorites);
  };

  const cardHoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const hoverCards = document.querySelectorAll<HTMLElement>(".card_detail");

    if (window.innerWidth / 2 - 40 < e.currentTarget.parentElement.offsetLeft) {
        setIsLastCard(true);
    }
    // hoverCards.forEach(card => {
    //     card.classList.
    // })
    setIsClicked((isClicked) => !isClicked);

  };

  //! ეს გვეხმარება რომ როცა ჰოვერი მოხდება კარტა და ღილაღი გაქრეს!
  const handleHoverLeave = () => {
    setIsClicked(null);
    setIsVisible(false);
  };

  return (
    <div
      className="PrimaryContentCard"
      key={id}
      onMouseLeave={handleHoverLeave}
    >
      <NextLink route="/#">
        <div
          className={"PrimaryContentCard__img"}
        style={{ backgroundImage: `url(${imageUrl})` }}
        >
       {/* <Image
        src={imageUrl}
        alt="slider_btn"
        width={100}
        height={128}
        quality={100}
        layout="responsive"
        
        /> */}
          <div className="price-tag">
            {checkNewPrice && (
              <div className="removed-price-tag">
                <p className="f-weight-bo f-size-p3">
                  {newPrice}
                  <span style={{ color: "#00E267", fontWeight: "bold" }}>
                    &#8382;
                  </span>
                </p>
              </div>
            )}

            <div className="normal-price">
              <p className="f-weight-bo f-size-p3">
                {price}
                <span style={{ color: "#00E267", fontWeight: "bold" }}>
                  &#8382;
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="PrimaryContentCard__title">
          <p className="f-weight-bo f-size-p5" title={title}>
            {stringToCut(title, 50)}
          </p>
        </div>
      </NextLink>
      <div
        className="course_card_hover_logo course_card_hover_logo_mobile"
        onClick={(e) => cardHoverHandler(e)}
      >
        <div
          className={isClicked ? "card_detail" : "card_detail-display"}>
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
            <Star
              key={id}
              style={{ fill: "#FFD703", color: "#FFD703" }}
              size={16}
            />
          </div>
          <div className="numbers">
            <p className="f-weight-r f-size-p5">
              {raiting}{" "}
              <span
                style={{ opacity: "50%" }}
                className="f-weight-r f-size-p6"
              >
                ({numberOfVotes})
              </span>
            </p>
          </div>
        </div>
        <div className="PrimaryContentCard__raiting--name">
          <NextLink route="/#">
            <p className="f-weight-bo f-size-p5">
              {stringToCut(author, 25)}
            </p>
          </NextLink>
        </div>
      </div>
      <div className="PrimaryContentCard__like">
        <label
          className={
            isBestSeller ? "label regular  f-size-p7" : null
          }
        >
          {isBestSeller ? <p>ბესტსელერი</p> : null}
        </label>

        <div
          className={
            addToFavorites
              ? "full-heart-svg heart heart-background"
              : "stroke-heart-svg heart"
          }
          onClick={handleAddFavorite}
        ></div>
      </div>
    </div>
  );
};

export default memo(PrimaryContentCard);
