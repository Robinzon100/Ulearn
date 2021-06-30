import { GetServerSideProps } from "next";


import Courses from "components/lib/cards/Card";



//* ACTIONS 
import { getAllCourseVideos } from "actions/client/course/landingPage/landing.courses.action"
import { handleUserCourseLikes } from "components/utils/helpers/handleUserCourseLikes";


import CourseSearch from "components/pages/courses/CoursesSearch";
import { useState, useEffect } from 'react';
import { getCoursesByUrlFilter } from "actions/client/course/course.index.action";
import cookie from 'cookie';
import { authenticatedRequest } from '../components/utils/auth/tokenValidations';
import { getUsersPrefferedCategoryIds } from "actions/client/user/courses/getFilteredCourses";
// import { redirect } from './../components/utils/auth/redirect.utils';



const AllCourses = ({ data, userPrefferedCategoryIds }) => {
    const [courses, setCourses] = useState(data.courses)



    useEffect(() => {
        setCourses(data.courses)
    }, [data])



    return (
        <>
            <section className="allCourses">
                <div className="allCourses-hero-img">
                    <CourseSearch
                        result={(result) => setCourses(result)}
                        userPrefferedCategoryIds={userPrefferedCategoryIds}
                    />
                </div>



                <div className="allCourses-container">
                    {courses.map((card) => (
                        <Courses
                            key={card.id}
                            uuid={card.uuid}
                            id={card.id}
                            name={card.title}
                            price={card.price}
                            isLiked={false}
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
            </section>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let courses
    //@ts-ignore
    let userPrefferedCategoryIds = null
    
    if ('m_i' in ctx.query) {
        courses = await getCoursesByUrlFilter(Object.values(ctx.query))
    } else {
        courses = await getAllCourseVideos();
    }


    if ('search' in ctx.query) {
        console.log('this is for search');
        
    } 
    
    const { auth_access_token } =
        cookie.parse(ctx ? ctx.req.headers.cookie : document.cookie)


    if (auth_access_token && auth_access_token.length > 0) {
        const { user_prefered_categories } = await authenticatedRequest(getUsersPrefferedCategoryIds, null, ctx)
        userPrefferedCategoryIds = user_prefered_categories
    }


    return {
        props: {
            data: courses,
            userPrefferedCategoryIds: 0,
            filterQuery: ctx.query
        }
    }
}




export default AllCourses
