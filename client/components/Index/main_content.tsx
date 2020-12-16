import { useEffect, useState } from "react";

//! ===========================OUR IMPORTS

import PrimaryContentCard from "components/global_components/cards/PrimaryContentCard";
import Carousel from "components/Index/carousel/carousel";
import PrimaryContentCardJson from "../../public/json/PrimaryContentCard.json";
import CategoriesComponent from "components/Index/categoriesComponent";
import Overlay from "components/Index/overlay/Overlay";

//! ===================== JSON
// import CategoriesJson from "../../public/json/categories.json";
import InputSelectComponent from "components/Index/InputSelect.Component";
import { getAllCategories } from "actions/client/categories.action";

interface categories {
  categories: any;
}

const main_content: React.FC = () => {
  //* JSON
  const CardsJson = PrimaryContentCardJson.contentCard;
  

  const [data, setData] = useState([]);

  const fetchCarouselCategories = async () => {
    const {categories: { main_categories }} = await getAllCategories();

    setData(main_categories);
    // console.log(main_categories);
  };

  useEffect(() => {
    // fetchCarouselCategories();
  }, []);

  return (
    <>
      <div className="main_content">
        {/* //! კარუსელი */}
        <Carousel carouselJson={data} />

        {/* //! ინფუთები */}
        <div className="main_content--container">
          <div className="category">
            <div className="category_heading">
              <p className="heading-6 bold">კატეგორიები</p>
            </div>
            <CategoriesComponent CategoriesJson={data} />
          </div>

          <div className="landing_courses">
            <InputSelectComponent />
            <Overlay CardsJson={CardsJson} />

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
