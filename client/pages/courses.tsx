import React, { useState, useEffect } from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { Eye,Folder } from "react-feather";

//! ==== OTHER IMPORTS
import BaseLayout from "components/base-layout";
import SideMenu from "components/sideMenu";
import CommentCards from "components/global_components/comment_cards/comment_cards";
import InputCommentCards from "components/global_components/comment_cards/inputComment_cards";
import CoursesJson from "../public/json/Courses.json";

//! === IMPORTED ICONS FROM Courses.json
import Description from "../public/SVG/CoursesSvg/Clipboard";
import Resources from "../public/SVG/CoursesSvg/Folder";
import QuestionAnswer from "../public/SVG/CoursesSvg/HelpCircle";
import Estimates from "../public/SVG/CoursesSvg/Estimates";

 


//! === INTERFACES
import { Description_type,QuestionAnswer_type,Resources_type,Estimates_type } from "../interfaces/coursePage.interface";


export const Courses: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");

  const courseTabs = [
    {
      title: "აღწერა",
      iconComponent: "Description",
      route: "/description",
    },
    {
      title: "კითხვა-პასუხი",
      iconComponent: "QuestionAnswer",
      route: "/questionAnswer",
    },
    {
      title: "რესურსები",
      iconComponent: "Resources",
      route: "/resources",
    },
    {
      title: "შეფასებები",
      iconComponent: "Estimates",
      route: "/estimates",
    },
  ];

  const [tabContent, setTabContent] = useState<object>(CoursesJson.description);
  const [tabIndex, setTabIndex] = useState<number>(0);




  // const fetchTabConent = (courseId: number,route: string):Description | QuestionAnswer | Resources | Estimates => {
    
  // };
  const fetchTabConent = (courseId: number, route: string):Description_type | QuestionAnswer_type | Resources_type | Estimates_type => {
    switch (route) {
      case "/description":
        return CoursesJson.description
        break;
    
      case "/questionAnswer":
        return CoursesJson.questionAnswers
        break;
    
      case "/resources":
        return CoursesJson.Resources
        break;
    
      case "/estimates":
        return CoursesJson.ratings
        break;
    
      default:
        break;
    }
  };

  const renderIcon = (icon) => {
    if (icon == "Description") {
      return <Description />;
    } else if (icon == "Resources") {
      return <Resources />;
    } else if (icon == "QuestionAnswer") {
      return <QuestionAnswer />;
    } else if (icon == "Estimates") {
      return <Estimates />;
    }
  };

  let subTitles = [
    {
      id: 1,
      text: "java mana",
      videoUrl:
        "https://s4106-05.imovies.cc/video/imovie_hash_code/1/2020090407554015_high_ENG.mp4?md5=Ul1cPbbjqASrVDkrD7Cmqg&expires=1599656612&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTU6IjE3Ni4yMjEuMTMyLjIxMCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTQ6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84NS4wLjQxODMuODMgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==",
      amountOfMinutes: 12,
    },
    {
      id: 2,
      text: "java asdasd as",
      videoUrl:
        "https://s4114-21.imovies.cc/video/imovie_hash_code/3/2017050923065223_high_eng.mp4?md5=W1C5ex9RqZWL-Rejf4JUqw&expires=1599656434&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTU6IjE3Ni4yMjEuMTMyLjIxMCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTQ6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84NS4wLjQxODMuODMgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==",
      amountOfMinutes: 12,
    },
  ];

  useEffect(() => {
    let player = new Playerjs({
      id: "player",
      file:
        "https://s4114-21.imovies.cc/video/imovie_hash_code/3/2017050923065223_high_eng.mp4?md5=W1C5ex9RqZWL-Rejf4JUqw&expires=1599656434&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTU6IjE3Ni4yMjEuMTMyLjIxMCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTQ6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84NS4wLjQxODMuODMgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==",
    });
  }, []);

  return (
    <>
      <Head>
        <script src="js/player.js" async defer></script>
      </Head>

      <BaseLayout>
        <div className="courses-page">
          <div className="courses-page--about">
            <div className="courses-page--name">
              <p className="paragraph-light-Noto paragraph-smallest">
                კურსის სახელი
              </p>
            </div>

            <div className="courses-page--about__heading">
              <p className="heading-semi-bold-Noto  paragraph-medium">
                კურსის თავი / კონკრეტული ვიდეოს სახელი
              </p>

              <div className="viewers">
                <Eye size={17} />
                <p className="paragraph-medium-small Eina-semibold">755</p>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="section-courses">
              {/* //! VIDEOPLAYER */}
              <div id="player" className="section-courses--video-player"></div>
              {/* //! VIDEOPLAYER */}

              <div className="section-courses--tablist">
                <div className="section-courses--tablist__container gray-border">
                  <ul className="renderedContent_list">
                    {courseTabs
                      ? courseTabs.map((courseTab, i) => (
                          <li
                            className="renderedContent_list--item"
                            onClick={(e) => {
                              setTabContent(fetchTabConent(1, courseTab.route))
                              setTabIndex(i)
                              // moveTabLine();
                            }}
                            key={i}
                          >
                            <div className="rendered_icon">
                              {renderIcon(courseTab.iconComponent)}
                            </div>
                            <div className="rendered_title">
                              <p className="heading-semi-bold-Noto paragraph-medium">
                                {courseTab.title}
                              </p>
                            </div>
                          </li>
                        ))
                      : null}
                    <span className="underline"></span>
                  </ul>
                </div>

               

                <div className="courses_content">
              
                  <div className="СontentReveal">

                    {tabIndex == 0 ? 
                      ReactHtmlParser(tabContent.html)
                 
                 
                 
                 
                    : tabIndex == 1 ? 
                    <div className="QuestionAnswerReveal">   
                      {tabContent.questionAnswers.map(question =>(
                        <div className="question-answer">
                          <div className="main-comment">
                            <div
                              style={{backgroundImage: `url(${question.imageUrl})`}}
                              className="main-comment__pic"
                            ></div>
                            <div className="main-comment__text">
                              <div className="about-user">
                                <div className="about-user__name">
                                  <h1>{question.userName}</h1>
                                </div>
                                <div className="about-user__time">
                                  <p>{question.datePosted}</p>
                                </div>
                              </div>
                              <div className="user-comment">
                                <p>
                                  {question.text}
                                </p>
                              </div>
                              <div className="user-answer">
                                <a
                                  href="#"
                                  className="btn btn-black heading-bold-Noto paragraph-medium-small"
                                >
                                  პასუხის გაცემა
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    
                    
                    : tabIndex == 2 ? 
                    <>
                      {ReactHtmlParser(tabContent.html)}
                        
                      <br/>
                    <br/>
                      <div className="resources">
                        
                        <div className="resources_files">
                          <a href={tabContent.resource.filePath} className="btn btn-for-video-files">
                          <div className="files">
                              <h1>{tabContent.resource.title}</h1>
                              
                            <div className="folder-icon icon">
                              <Folder
                                style={{ fill: "#FFFFFF", color: "#FFFFFF" }}
                                size={50}
                                />
                            </div>
                          </div>
                          </a>
                        </div>
                              
                      </div>
                    </>
                    
                    : tabIndex == 3 ?
                  
                        console.log("beq")
                  
                    :null }


                  </div>

              
                </div>
              </div>
            </div>
            <div className="side-menu noselect ">
              <SideMenu
                id={1}
                title={"javascript"}
                courseChapterTime={45}
                subTitles={subTitles}
                subTaskTime={5}
              />
              <br />
              <br />
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Courses;