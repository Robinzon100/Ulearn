import React, { useState,useEffect} from "react";
import { Star } from "react-feather";

import CardDetail from './CardDetail';


//! ==================INTERFACE
import {PrimaryContentCards} from "../../../interfaces/PrimaryContentCard.interface";



const PrimaryContentCard: React.FC<PrimaryContentCards> = ({
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

    const [isLastCard, setIsLastCard] = useState<boolean>(false);


   

    const cardHoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
        setHover(true)
        
        if(((window.innerWidth / 2 ) - 30.5) < e.currentTarget.offsetLeft) {    
            setIsLastCard(true);
        }
        
    }

   
    return (
    <div className="PrimaryContentCard" 
        onMouseEnter={(e) => cardHoverHandler(e)}
        onMouseLeave={() => setHover(null)}
    >
        {hover ? 
        

        <CardDetail id={id} isLastCard={isLastCard} />
         
            
        : null}

      <a href="#">
        <div className="PrimaryContentCard__img">
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

      <div className="PrimaryContentCard__title">
        <p className="heading-bold-Noto paragraph-medium ">{title}</p>
      </div>
      <div className="PrimaryContentCard__raiting">
        <div className="PrimaryContentCard__raiting--container">
          <div className="star">
            <Star style={{ fill: "#FFD703", color: "#FFD703" }} />
          </div>
          <div className="numbers">
            <p className="Eina-semibold paragraph-small">
              {raiting}({numberOfVotes})
            </p>
          </div>
        </div>
        <div className="PrimaryContentCard__raiting--name">
          <p className="heading-semi-bold-Noto  paragraph-small">{author}</p>
        </div>
      </div>
      <div className="PrimaryContentCard__like">
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
