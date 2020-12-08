import React from "react";

//! ===========================OUR IMPORTS

import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/Index/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import CategoriesComponent from "components/Index/categoriesComponent";
import Overlay from "components/Index/overlay/Overlay";

//! ===================== JSON
import CategoriesJson from "../../public/json/categories.json";
import CarouselJson from "../../public/json/carousel.json";
import InputSelectComponent from "components/Index/InputSelect.Component"
;
interface categories {
  categories: any;
}

const main_content: React.FC = () => {
    
    //* JSON
  const CardsJson = PrimaryContentCardJson.contentCard;
  const categoriesJson = CategoriesJson.Categories;
  const carouselJson = CarouselJson.carousel;

  return (
    <>
      <div className="main_content">
        {/* //! კარუსელი */}
        <Carousel carouselJson={carouselJson} />

        {/* //! ინფუთები */}
         <div className="main_content--container">
          <div className="category">
            <div className="category_heading">
              <p className="heading-6 bold">კატეგორიები</p>
            </div>
            <CategoriesComponent CategoriesJson={CategoriesJson.Categories}/>
            </div>

          <div className="landing_courses">
            <InputSelectComponent />
            <Overlay CardsJson={categoriesJson}/>

            <div className="landing_courses--cards">
              {/* //! ეს არის მთავარი გვერდზე რაც კარტებია */}
              {CardsJson.map((card) => (
                <PrimaryContentCard
                  key={card.id}
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
                  posted={card.posted}
                  difficulty={card.difficulty}
                  description={card.description}
                  descriptionList={card.hoverCardList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main_content;
