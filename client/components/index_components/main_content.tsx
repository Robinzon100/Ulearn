import React, { Fragment, useState } from "react";
import { ChevronDown} from "react-feather";

import InputSearch from "components/global_components/inputs/inputSearch";
import SelectInput from "components/global_components/inputs/selectInput";
import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/index_components/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import List from "components/global_components/categories_list/list";



const main_content: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>(
    "მოძებნე სასურველი კურსი"
  );
  const [CardsJson, setCardsJson] = useState(PrimaryContentCardJson.contentCard)

  

  return (
    <Fragment>
      <div className="main_content">
        {/* //! კარუსელი */}

        <Carousel id={1} title={"ბიზნესი"} />

        {/* //! ინფუთები */}
        <div className="main_content--input">
          <InputSearch placeHolder={placeHolder} />

          <div className="sorting">
    
            <div className="sorting__select">
              <SelectInput  SelectInputId={1} />
            </div>
          </div>
        </div>
        <div className="main_content--container">
         
          <div className="courses">
            <div className="overlay_container">
              <div className="wrapper">
                <div className="see_more">
                  <p className="heading-bold-Noto paragraph-biggest">
                    იხილეთ მეტი
                  </p>
                </div>
                <div className="see_more_arrow">
                  {/* <img src="./pictures/courses/see_more_arrow.svg" alt="" /> */}
                  <ChevronDown size={40} style={{ color: "#00E267" }} />
                </div>
              </div>
            </div>

            <div className="courses--cards">
              {/* //! ეს არის მთავარი გვერდზე რაც კარტებია */}

              {/* //! აქ კიდევ აკლია სურათის და მოწონების პროპი,როცა ბაზიდან წამოვა მაშინ ჩავამატებ  */}
              
              {CardsJson.map((card) => (
                <PrimaryContentCard
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  author={card.author}
                  raiting={card.raiting}
                  numberOfVotes={card.numberOfVotes}
                  bestseller={card.bestseller}
                  price={card.price}
                  newPrice={card.newPrice}
                  isLiked={card.isLiked}
                //   PrimaryContentCardHovers={card.hoverCard}
                />
              ))}
              
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default main_content;
