import { useState, memo, useRef } from "react";
import { Star } from "react-feather";

//! ==================OUR IMPORTS

import { GetBoundingClientRect } from "components/utils/helpers/getBoundingClientRect";
import { PrimaryContentCards } from "interfaces/PrimaryContentCard.interface";

import { stringToCut } from "components/utils/helpers/stringToCut";
import CardDetail from "./CardDetail";
import NextLink from "components/utils/nextLink/NextLink";

const Card = ({
  id,
  price,
  name,
  bestseller,
  discount_price,
  numberOfVotes,
  thumbnail_imageUrl,
  isLiked,
  posted,
  difficulty,
  description,
  descriptionList,
  overall_rating,
}: PrimaryContentCards) => {
  const selfRef = useRef<HTMLDivElement>(null);

  const [elProperties, setElProperties] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
  });

  const [addToFavorites, setAddToFavorites] = useState<boolean>(isLiked);

  const [checkNewPrice] = useState<boolean | number>(discount_price);

  const [isClicked, setIsClicked] = useState<boolean | null>(false);

  const [isBestSeller] = useState<boolean>(bestseller);

  const [, setIsVisible] = useState<boolean>(false);

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

  const cardHoverHandler = (e) => {
    //Calculates Card width and positions

    let ww = Math.max(document.documentElement.clientWidth,window.innerWidth || 0);
    let offSetLeft = e.currentTarget.parentElement.offsetLeft;

    if (Math.round(offSetLeft) > ww / 2 - offSetLeft / 10) {
      GetBoundingClientRect(selfRef, elProperties, setElProperties);
      e.currentTarget.firstChild.style.top = `${
        elProperties.top - elProperties.top - 30
      }px`;
      e.currentTarget.firstChild.style.right = `${
        elProperties.width - elProperties.width + 315
      }px`;
    } else {
      e.currentTarget.firstChild.style.top = `${
        elProperties.top - elProperties.top - 30
      }px`;
      e.currentTarget.firstChild.style.left = `${
        elProperties.width - elProperties.width + 35
      }px`;
      GetBoundingClientRect(selfRef, elProperties, setElProperties);
    }

    setIsClicked((isClicked) => !isClicked);
  };

  //! ეს გვეხმარება რომ როცა ჰოვერი მოხდება კარტა და ღილაღი გაქრეს!
  const handleHoverLeave = () => {
    setIsClicked(null);
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={selfRef}
        className="PrimaryContentCard"
        key={id}
        onMouseLeave={() => handleHoverLeave()}
      >
        <NextLink route={`/course/${id}`}>
          <div
            className={"PrimaryContentCard__img"}
            style={{ backgroundImage: `url(${thumbnail_imageUrl})` }}
          >
            <div className="price-tag">
            <div className="normal-price">
              <p className="f-weight-b f-size-p3">
                {discount_price}
                <span style={{ color: "#00E267", fontWeight: "bold" }}>
                  &#8382;
                </span>
              </p>
              </div>

              <div className=" removed-price-tag">
                {checkNewPrice && (
                  <div className="removed-price-tag">
                    <p className="f-weight-b f-size-p3">
                      {price}
                      <span style={{ color: "#00E267", fontWeight: "bold" }}>
                        &#8382;
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="PrimaryContentCard__title">
            <p className="f-weight-b f-size-p5" title={name}>
              {stringToCut(name, 50)}
            </p>
          </div>
        </NextLink>
        <div
          className="course_card_hover_logo course_card_hover_logo_mobile"
          onClick={(e) => cardHoverHandler(e)}
        >
          <div className={isClicked ? "card_detail" : "card_detail-display"}>
            {
              <CardDetail
                id={id}
                name={name}
                posted={posted}
                difficulty={difficulty}
                description={description}
                descriptionList={descriptionList}
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
                {overall_rating}
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
              <p className="f-weight-b f-size-p5">
                {/* {stringToCut(creator, 25)} */}
              </p>
            </NextLink>
          </div>
        </div>
        <div className="PrimaryContentCard__like">
          <label className={isBestSeller ? "label regular  f-size-p7" : null}>
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
    </>
  );
};

export default memo(Card);
