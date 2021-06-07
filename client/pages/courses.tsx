import { GetServerSideProps } from "next";


import Courses from "components/lib/cards/Card";



//* ACTIONS 
import { getAllCourseVideos } from "actions/client/course/landingPage/landing.courses.action"
import { handleUserCourseLikes } from "components/utils/helpers/handleUserCourseLikes";


import AllCoursesSearch from "components/pages/allCourses/AllCoursesSearch";



const AllCourses = ({data}) => {
    return (
        <>
            <section className="allCourses">
                <div className="allCourses-hero-img">
                    <AllCoursesSearch/>
                </div>
                


                <div className="allCourses-container">
                {data.courses.map((card) => (
                <Courses
                  key={card.id}
                  uuid={card.uuid}
                  id={card.id}
                  name={card.title}
                  price={card.price}
                  isLiked={true}
                  thumbnail_imageUrl={card.thumbnail_imageUrl}
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
            </section>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {

    const allCourses = await getAllCourseVideos();
    

    return {
        props: {
            data:allCourses
        }
    }
}




export default AllCourses
