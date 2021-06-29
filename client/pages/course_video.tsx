
import { Eye } from "react-feather";
import Head from "next/head"

//! ==== OTHER IMPORTS
import SideMenu from "components/lib/sidemenu/sideMenu";
import CourseVideoPlayer from '../components/pages/course_video/CourseVideoPlayer';
import CoursesJson from "../public/json/Courses.json";
import CourseTabContent from "components/pages/course_video/course_tabs/CourseTabContent";




const MyCourse = () => {
  const videoLists = CoursesJson.videoLists.Lists;


  return (
    <>
      <Head>
        <script src="js/player.js" async defer />
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
          <div className="courses-container">
            <div className="section-courses">


              <div id="player" className="section-courses--video-player">
                <CourseVideoPlayer />
              </div>
              

              {/* /// TAB HEADING CONTENT */}
              <CourseTabContent/>
            </div>

            {/* /// TAB HEADING CONTENT */}
            <CourseTabContent />
          </div>


          <div className="side-menu noselect ">
            {videoLists.map((data, i) => (
              <SideMenu
                id={i}
                key={i}
                name={data.name}
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

export default MyCourse;
