import useSWR from "swr";



//! ===========================OUR IMPORTS
import PrimaryContentCard from "components/lib/cards/Card";
import Carousel from "components/lib/carousel/carousel";
import CategoriesComponent from "components/pages/Index/SideCategories";
import Overlay from "components/pages/Index/Overlay";
import InputSelectComponent from "components/lib/dropdowns/DropdownsContainer";
import { handleUserCourseLikes } from "components/utils/helpers/handleUserCourseLikes";




//! ===================== ACTIONS
import { fetcher } from "actions/swr/fetchers";





const CourseCards = ({ landingCourse }) => {

  const { data } = useSWR(
    `${process.env.BACK_END_URL}/api/categories/all`,
    fetcher
  );

  return (
    <>
      <div className="main_content">


        {/* //! კარუსელი */}
        {data && (
          <Carousel categories={data.categories} />
        )}



        {/* //! ინფუთები */}
        <div className="main_content--container">
          <div className="category">
            <div className="category_heading">
              <p className="f-size-h8">კატეგორიები</p>
            </div>
            {data && <CategoriesComponent categories={data.categories} />}
          </div>

          <div className="landing_courses">


            {/* // INDEX INPUTS AND SELECTS  */}
            <InputSelectComponent />




            {/* // CARDS OVERLAY  */}
            <Overlay courses={landingCourse.courses} />








            <div className="landing_courses--cards">
              {landingCourse.courses.map((card) => (
                <PrimaryContentCard
                  key={card.id}
                  uuid={card.uuid}
                  id={card.id}
                  name={card.title}
                  price={card.price}
                  isLiked={
                    landingCourse.liked_courses_ids &&
                    landingCourse.liked_courses_ids.includes(card.id)
                  }
                  thumbnail_imageUrl={card.image_url}
                  creator={card.id}
                  overall_rating={card.overall_rating}
                  numberOfVotes={20}
                  bestseller={card.bestseller}
                  discount_price={card.discount_price}
                  created_at={card.created_at}
                  difficulty={card.difficulty}
                  description={card.description}
                  descriptionList={card.hoverCardList}
                  handleUserCourseLikes={handleUserCourseLikes}
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
