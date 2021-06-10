import { GetServerSideProps } from "next";


import Courses from "components/lib/cards/Card";



//* ACTIONS 
import { getAllCourseVideos } from "actions/client/course/landingPage/landing.courses.action"
import { handleUserCourseLikes } from "components/utils/helpers/handleUserCourseLikes";


import CourseSearch from "components/pages/courses/CoursesSearch";
import { useState, useEffect } from 'react';
import { getCoursesByUrlFilter } from "actions/client/course/course.index.action";



const AllCourses = ({ data }) => {
    const [courses, setCourses] = useState(data.courses)


    useEffect(() => {
        setCourses(data.courses)
    }, [data])



    return (
        <>
            <section className="allCourses">
                <div className="allCourses-hero-img">
                    <CourseSearch result={(result) => setCourses(result)} />
                </div>



                <div className="allCourses-container">
                    {courses.map((card) => (
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


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let courses
    if ('m_i' in ctx.query) {
        courses = await getCoursesByUrlFilter(Object.values(ctx.query))
    } else {
        courses = await getAllCourseVideos();
    }


    return {
        props: {
            data: courses,
            filterQuery: ctx.query
        }
    }
}




export default AllCourses
