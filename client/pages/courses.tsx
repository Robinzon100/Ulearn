import { useState} from "react";
import Head from "next/head";
import { Eye} from "react-feather";

//! ==== OTHER IMPORTS

import SideMenu from "components/sideMenu";
import CourseVideoPlayer from '../components/CourseVideoPlayer';
import CoursesJson from "../public/json/Courses.json";
import CourseTablist from "components/course/course_tablist";


//! === INTERFACES
import { AboutCourse } from "../interfaces/coursePage.interface";



export const Courses: React.FC<AboutCourse> = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");
  const [videoLists, setVideoLists] = useState(CoursesJson.videoLists);
  
  return (
    <>
      <Head>
        <script src="js/player.js" async defer></script>
      </Head>

      <>
        <div className="courses-page">
          <div className="courses-page--about">
            <div className="courses-page--name">
              <p className="f-size-p5">
                <strong>{CoursesJson.aboutCourses.aboutCourse.title}</strong>
              </p>
              <div className="viewers">
                <Eye size={17} />
                <p className="f-size-p7 f-weight-bo">
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
              
              <CourseTablist/>
            </div>
            
            <div className="side-menu noselect ">
              {videoLists.Lists.map((videoList) => (
                <SideMenu
                  key={videoList.id}
                  id={videoList.id}
                  title={videoList.title}
                  courseChapterTime={videoList.courseChapterTime}
                  subTitles={videoList.subTitles}
                //   handleClick={handleDisplayVideoNameClick}
                />
              ))}

              <br />
              <br />
            </div>
          </div>
        </div>

      </>
    </>
  );
};

export default Courses;
