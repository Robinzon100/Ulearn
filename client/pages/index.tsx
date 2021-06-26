import { GetServerSideProps } from "next";



import Hero from "components/pages/Index/Hero";
import CourseCards from "components/pages/Index/CourseCards";
import { Observer } from "mobx-react-lite";

//* ACTIONS 
import { getAllCourseVideos, getAllUserCourseVideos } from "actions/client/course/landingPage/landing.courses.action"
import { authenticatedRequest } from '../components/utils/auth/tokenValidations';
import cookie from 'cookie';





const Index = ({ data }) => {
  return (
    <Observer>
      {() => (
        <>
          <Hero />
          <CourseCards
            landingCourse={data}
          />
        </>
      )}
    </Observer>
  );
};



export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { auth_access_token } = cookie.parse(`${ctx.req.headers.cookie}`)
  let landingCourse = null

  if (auth_access_token && auth_access_token.length > 0) {
    landingCourse = await authenticatedRequest(getAllUserCourseVideos, null, ctx);
    if (landingCourse == undefined) {
      landingCourse = await getAllCourseVideos()
    }
  } else {
    landingCourse = await getAllCourseVideos()
  }


  return {
    props: {
      data: landingCourse
    }
  }
}




export default Index;
