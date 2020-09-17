import React, { useState } from "react";
import { Star } from "react-feather";

import CardDetail from './CardDetail';

interface Props {
  id: number;
  title: string;
  author: string;
  raiting: number;
  bestseller: boolean;
  price: number;
  newPrice: number;
  numberOfVotes: number;
}

const PrimaryContentCard: React.FC<Props> = ({
  id,
  price,
  title,
  author,
  raiting,
  bestseller,
  newPrice,
  numberOfVotes,
}) => {
  const [addToFavorites, setAddToFavorites] = useState<boolean>(false);

  const [checkNewPrice, setCheckNewPrice] = useState<boolean>(false);

  const [hover, setHover] = useState<boolean | null>(false);

  const handleCheckNewPrice = () => {
    setCheckNewPrice(true);
  };



  return (
    <div className="card" 
    onMouseEnter={() => setHover((hover) => !hover)}
    onMouseLeave={() => setHover(null)}
    >
        {/* {hover ? <CardDetail/> : null} */}

      <a href="#">
        <div className="card__img">
          <div className="price-tag">
            {checkNewPrice ? (
              <div className="removed-price-tag">
                <p className="Eina-semibold paragraph-big">
                  {newPrice}
                  <span style={{ color: "#00E267", fontWeight: "bold" }}>
                    &#8382;
                  </span>
                </p>
              </div>
            ) : null}

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
      </a>

      <div className="card__title">
        <p className="heading-bold-Noto paragraph-medium ">{title}</p>
      </div>
      <div className="card__raiting">
        <div className="card__raiting--container">
          <div className="star">
            <Star style={{ fill: "#FFD703", color: "#FFD703" }} />
          </div>
          <div className="numbers">
            <p className="Eina-semibold paragraph-small">
              {raiting}({numberOfVotes})
            </p>
          </div>
        </div>
        <div className="card__raiting--name">
          <p className="heading-semi-bold-Noto  paragraph-small">{author}</p>
        </div>
      </div>
      <div className="card__like">
        <label className="label heading-semi-bold-Noto paragraph-smallest">
          {bestseller}
          ბესტსელერი
        </label>

        <div
          className={addToFavorites ? "full-heart-svg" : "stroke-heart-svg"}
          onClick={() => setAddToFavorites((addToFavorites) => !addToFavorites)}
        ></div>
      </div>
    </div>
  );
};

export default PrimaryContentCard;
