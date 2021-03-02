import React, { useEffect } from "react";
import NextLink from "components/utils/NextLink";
import { ShoppingCart, Check } from "react-feather";
import { stringToCut } from "components/utils/stringToCut";

//! ============= INTERFACE
import { PrimaryContentCardHover } from "./../../../interfaces/PrimaryContentCardHover.interface";

interface isLastCard {
  isLastCard: boolean;
}

const CardDetail: React.FC<PrimaryContentCardHover & isLastCard> = ({
  id,
  title,
  posted,
  difficulty,
  description,
  descriptionList,
  isLastCard,
}) => {
  const handleHoverCardStyle = () => {
    const hoverCards = document.querySelectorAll<HTMLElement>(".card_detail");
    // debugger
    if(isLastCard) {
        hoverCards.forEach(card => {
            card.style.left = "-680px "
        })
    }

    // if (window.innerWidth > 360) {
    //   hoverCards.forEach((card) => {
    //     card.style.left = "-665px";
    //   });
    // }

    // if (window.innerWidth < 360) {
    //   hoverCards.forEach((card) => {
    //     card.style.left = "0 !important";
    //   });
    // }
  };

  useEffect(() => {
    if (isLastCard) {
      console.log("left");
      handleHoverCardStyle();
    }
  }, [isLastCard]);

  return (
    <>
      <div className="card_detail--container" key={id}>
        <div className="inside_content">
          <div className="card_detail--container__title">
            <NextLink route="/someCourseName">
              <p className="f-size-p4">
                {stringToCut(title, 25)}
              </p>
            </NextLink>
          </div>
          <div className="card_detail--container__date">
            <p
              className="f-size-p7"
              style={{ color: "#00E267" }}>
              დაიდო:
              <span className="f-size-p6est">{posted}</span>
            </p>
            <p
              className="f-size-p7"
              style={{ color: "#636469" }}>
              სირთულე:
              <span className="" style={{ color: "#FFD703" }}>
                {difficulty}
              </span>
            </p>
          </div>
          <div className="card_detail--container__description">
            <p className="f-size-p6">{description}</p>
          </div>
          <div className="card_detail--container__list">
            <ul>
              {descriptionList &&
                descriptionList.map((list, i) => (
                  <li key={i}>
                    <div className="check">
                      <Check size={15} />
                    </div>
                    <div className="paragraph">
                      <p className="f-size-p6">
                        {list.list}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <a href="#">
          <div className="card_detail--container__addtobucket">
            <div className="heading">
              <p className="f-size-p4">
                კალათაში დამატება
              </p>
            </div>
            <div className="shoppingCart">
              <ShoppingCart
                style={{ color: "#ffffff", fontWeight: "bold" }}
                size={25}
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardDetail;
