
import { Eye} from "react-feather";
import Head from "next/head"

//! ==== OTHER IMPORTS
import SideMenu from "components/lib/sidemenu/sideMenu";
import CourseVideoPlayer from '../components/pages/myCourse/CourseVideoPlayer';
import CoursesJson from "../public/json/Courses.json";
import CourseTabContent from "components/pages/myCourse/course_tabs/CourseTabContent";
// import {displayVideoNames} from "components/pages/myCourse/course_tabs/utils/DisplayVideoNames";



const Courses = () => {
  const videoLists = CoursesJson.videoLists.Lists;
//   const [displayName, setDisplayName] = useState<string | null>("ვიდეო გაკვეთილები");


  return (
    <>
    <Head>
        <script src="js/player.js" async defer/>
      </Head>


        <div className="courses-page">
          <div className="courses-page--about">
            <div className="courses-page--name">
              <p className="f-size-p5">
                <strong>ვიდეო გაკვეთილები</strong>
              </p>
              <div className="viewers">
                <Eye size={17} />
                <p className="f-size-p7 f-weight-b">
                  {CoursesJson.aboutCourses.aboutCourse.peopleWatched}
                </p>
              </div>
            </div>

            <div className="courses-page--about__heading">
              {/* {!displayName ? null : (
                <p className="f-size-p5">
                  ვიდეოს დასახელება - {displayName}
                </p>
              )} */}
            </div>
          </div>
          <div className="courses-container">
            <div className="section-courses">

              <div id="player" className="section-courses--video-player">
                <CourseVideoPlayer />
              </div>
              
              <CourseTabContent/>
            </div>
            
            
            <div className="side-menu noselect ">
                {videoLists.map((data, i) => (
                  <SideMenu
                    id={i}
                    key={i}
                    name={data.title}
                    courseChapterTime={45}
                    content={data.subTitles}
                  />
                ))}
              </div>
          </div>
        </div>


    </>
  );
};

export default Courses;
