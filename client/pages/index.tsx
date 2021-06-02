import { GetServerSideProps } from "next";



import Hero from "components/pages/Index/Hero";
import CourseCards from "components/pages/Index/CourseCards";
import { Observer } from "mobx-react-lite";

//* ACTIONS 
import { getAllCourseVideos } from "actions/client/course/landingPage/landing.courses.action"





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



export const getServerSideProps: GetServerSideProps = async () => {

    const landingCourse = await getAllCourseVideos();
    

    return {
        props: {
            data:landingCourse
        }
    }
}




export default Index;
