import { useState, memo, useRef } from "react";
import { Star } from "react-feather";

//! ==================OUR IMPORTS

import { cardHoverHandler } from "./utils/cardHoverHandler";

import { PrimaryContentCards } from "interfaces/PrimaryContentCard.interface";
import { stringToCut } from "components/utils/helpers/stringToCut";
import CardDetail from "./CardDetail";
import NextLink from "components/utils/nextLink/NextLink";

const Card = ({
  id,
  uuid,
  price,
  name,
  discount_price,
  numberOfVotes,
  thumbnail_imageUrl,
  created_at,
  difficulty,
  description,
  overall_rating,
  handleUserCourseLikes,
  isLiked,
}: PrimaryContentCards) => {
  const selfRef = useRef<HTMLDivElement>(null);

  const [elProperties, setElProperties] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
  });


  
  const [addToFavorites, setAddToFavorites] = useState<boolean>(isLiked);
  const [favoriteMessageState, setFavoriteMessageState] = useState(false);

  const [checkNewPrice] = useState<boolean | number>(discount_price);
  const [isClicked, setIsClicked] = useState<boolean | null>(false);

  const [, setIsVisible] = useState<boolean>(false);




  //! ეს გვეხმარება რომ როცა ჰოვერი მოხდება კარტა და ღილაღი გაქრეს!
  const handleHoverLeave = () => {
    setIsClicked(null);
    setIsVisible(false);
  };





  const handleCourseLike = () => {
    handleUserCourseLikes(id);
    setAddToFavorites((addToFavorites) => !addToFavorites);
    setFavoriteMessageState(true);
  };




  return (
    <>
      <div
        ref={selfRef}
        className="PrimaryContentCard"
        key={uuid}
        onMouseLeave={() => handleHoverLeave()}>
        <NextLink route={`/course/${uuid}`}>
          <div
            className={"PrimaryContentCard__img"}
            style={{ backgroundImage: `url(${thumbnail_imageUrl})` }}>
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
          onClick={(e) =>
            cardHoverHandler(
              e,
              selfRef,
              elProperties,
              setElProperties,
              setIsClicked
            )
          }
        >
          <div className={isClicked ? "card_detail" : "card_detail-display"}>
            {
              <CardDetail
                id={id}
                name={name}
                created_at={created_at}
                difficulty={difficulty}
                description={description}
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
          <div
            data-card-like-status={addToFavorites}
            className="stroke-heart-svg"
            onClick={() => handleCourseLike()}
            onMouseEnter={() => setFavoriteMessageState(true)}
            onMouseLeave={() => setFavoriteMessageState(false)}>
            <div
              className="remove-from-favorites noselect"
              data-like-status={favoriteMessageState}>
              <p className="f-size-p8 pf-weight-m">
                {favoriteMessageState ? addToFavorites
                    ? "ფავორიტებიდან ამოღება"
                    : "ფავორიტებში დამატება"
                    : "ფავორიტებიდან ამოღება"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card);
