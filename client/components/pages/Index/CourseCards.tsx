import { useEffect, useState } from "react";

//! ===========================OUR IMPORTS
import PrimaryContentCard from "components/lib/cards/Card";
import Carousel from "components/lib/carousel/carousel";
import PrimaryContentCardJson from "../../../public/json/PrimaryContentCard.json";
import CategoriesComponent from "components/pages/Index/SideCategories";
import Overlay from "components/pages/Index/Overlay";




//! ===================== JSON
import CategoriesImgs from "../../../public/json/categories.json";
import InputSelectComponent from "components/lib/dropdowns/DropdownsContainer";
import { getAllCategories } from "actions/client/categories.action";





const CourseCards = ({landingCourse}) => {
  const carouselImgs = CategoriesImgs.Categories;
  const CardsJson = PrimaryContentCardJson.contentCard;


  const [data, setData] = useState([]);

  
  const fetchCarouselCategories = async () => {
    const {categories: { main_categories }} = await getAllCategories();
    setData(main_categories);
  };

  useEffect(() => {
    fetchCarouselCategories();
  }, []);



  return (
    <>
      <div className="main_content">
        {/* //! კარუსელი */}
        <Carousel carouselJson={data} CarouselImgs={carouselImgs} />

        {/* //! ინფუთები */}
        <div className="main_content--container">
          <div className="category">
            <div className="category_heading">
              <p className="f-size-h8">კატეგორიები</p>
            </div>
            <CategoriesComponent CategoriesJson={data} />
          </div>

          <div className="landing_courses">
            <InputSelectComponent />
            <Overlay CardsJson={CardsJson} />

            <div className="landing_courses--cards">

              {landingCourse.courses.map((card) => (
                <PrimaryContentCard
                  key={card.id}
                  id={card.uuid}
                  name={card.title}
                  price={card.price}
                  thumbnail_imageUrl={card.thumbnail_imageUrl}
                  creator={card.id}
                  overall_rating={card.overall_rating}
                  numberOfVotes={20}
                  bestseller={card.bestseller}
                  discount_price={card.discount_price}
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

export default CourseCards;
