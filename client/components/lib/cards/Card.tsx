import { useState, useRef } from "react";
import { Star } from "react-feather";
import Link from "next/link";

//! ==================OUR IMPORTS

import { cardHoverHandler } from "./utils/cardHoverHandler";

import { PrimaryContentCards } from "interfaces/PrimaryContentCard.interface";
import { stringToCut } from "components/utils/helpers/stringToCut";
import CardDetail from "./CardDetail";





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
  const [, setFavoriteMessageState] = useState(false);

  const [checkDicountPrice] = useState<boolean | number>(discount_price);
  const [isClicked, setIsClicked] = useState<boolean | null>(false);



  const handleCourseLike = () => {
    handleUserCourseLikes({ id: id, isLiked: !addToFavorites });

    setAddToFavorites((addToFavorites) => !addToFavorites);
    setFavoriteMessageState(true);
  };





  return (
    <>
      <div
        ref={selfRef}
        className="PrimaryContentCard"
        key={uuid}
        onMouseLeave={() => setIsClicked(null)}>
        <Link href={`/course/${uuid}`} passHref>


          <div className="container">

            <div
              className={"PrimaryContentCard__img"}
              style={{ backgroundImage: `url(${process.env.BACK_END_URL}/api/images/${thumbnail_imageUrl})` }}>
              <div className="price-tag">
                {checkDicountPrice && checkDicountPrice != null && (
                  <div className="removed-price-tag price-tag-base-styles">
                    <p className="f-weight-b f-size-p3">
                      {discount_price}
                      <span style={{ color: "#00E267", fontWeight: "bold" }}>
                        &#8382;
                      </span>
                    </p>
                  </div>
                )}




                <div className="normal-price price-tag-base-styles">
                  {checkDicountPrice && checkDicountPrice != null && (
                    <div className="discounted_price_line" />
                  )}

                  <p className="f-weight-b f-size-p3">
                    {price}
                    <span style={{ color: "#00E267", fontWeight: "bold" }}>
                      &#8382;
                    </span>
                  </p>
                </div>
              </div>
            </div>



            <div className="PrimaryContentCard__title">
              <p className="f-weight-b f-size-p5" title={name}>
                {stringToCut(name, 50)}
              </p>
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
                      className="f-weight-r f-size-p6">
                      ({numberOfVotes})
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>




        {/*  CARD DETAIL  */}

        <div
          className="course_card_hover_logo course_card_hover_logo_mobile"
          onClick={(e) =>
            cardHoverHandler(e, selfRef, elProperties, setElProperties, setIsClicked)}>

          <div className={isClicked ? "card_detail" : "card_detail-display"}>
            {
              <CardDetail
                id={id}
                uuid={uuid}
                name={name}
                created_at={created_at}
                difficulty={difficulty}
                description={description}
              />
            }
          </div>
        </div>




        <div className="PrimaryContentCard__like">

          <div
            data-card-like-status={addToFavorites}
            className="stroke-heart-svg"
            onClick={() => handleCourseLike()}
            onMouseEnter={() => setFavoriteMessageState(true)}
            onMouseLeave={() => setFavoriteMessageState(false)}>


            {/* <div
              className="remove-from-favorites noselect"
              data-like-status={favoriteMessageState}>
              <p className="f-size-p8 pf-weight-m">

                {favoriteMessageState ? addToFavorites
                    ? "ფავორიტებიდან ამოღება"
                    : "ფავორიტებში დამატება"
                    : "ფავორიტებიდან ამოღება"}
              </p>

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
