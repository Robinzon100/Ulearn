import {useState,useEffect} from 'react'
import ReactHtmlParser from "react-html-parser";

//! ===========OUR IMPORTS
import * as CoursesJson from "../../../public/json/Courses.json";
import {Description_type, QuestionAnswer_type, Resources_type, Estimates_type, } from "../../../interfaces/coursePage.interface";
import CommentCards from "components/pages/course/comment_cards/comment_cards";
import { changeTabPositionAndColor } from "./Underline";


//! === IMPORTED ICONS FROM Courses.json
import Description from "../../../public/SVG/CoursesSvg/Clipboard";
import Resources from "../../../public/SVG/CoursesSvg/Folder";
import QuestionAnswer from "../../../public/SVG/CoursesSvg/HelpCircle";
import Estimates from "../../../public/SVG/CoursesSvg/Estimates";


const course_tabs = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [tabContent, setTabContent] = useState<any>(CoursesJson.description);
   

  //! ამას ვიდეოს სახელი გამოაქვს
//   const [displayName, setDisplayName] = useState<string | null>("");
    
  const courseTabs = [
    {
      id:1,
      title: "აღწერა",
      iconComponent: "Description",
      route: "/description",
      color:"#338EFF"
    },
    {
        id:2,
      title: "კითხვა-პასუხი",
      iconComponent: "QuestionAnswer",
      route: "/questionAnswer",
      color:"#FF5C4D"
    },
    {
        id:3,
      title: "რესურსები",
      iconComponent: "Resources",
      route: "/resources",
      color:"#00E267"
    },
    {
        id:4,
      title: "შეფასებები",
      iconComponent: "Estimates",
      route: "/estimates",
      color:"#FFD703"
    },
  ];

//   const handleDisplayVideoNameClick = (e) => {
//     const currentVideo = e.currentTarget.attributes["data-title"];
//     if (currentVideo) {
//       const subVideoNames = e.currentTarget.attributes["data-title"].nodeValue;

//       setDisplayName(subVideoNames);
//     }
//   };
  
  //! ტაბებზე დაჭერისას კონტენტის შეცვლის ფუნქცია
  const fetchTabConent = (route: string): | Description_type | QuestionAnswer_type | Resources_type | Estimates_type => {
    switch (route) {
      case "/description":
        return CoursesJson.description;

      case "/questionAnswer":
        return CoursesJson.questionAnswers;

      case "/resources":
        return CoursesJson.Resources;

      case "/estimates":
        return CoursesJson.ratings;

      default:
        break;
    }
  };

  //! რომ დავარენდოროთ ტაბების ფუნქცია
  const renderIcon = (icon: string) => {
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
   

  useEffect(() => {
    changeTabPositionAndColor();
}, [])


    return (
        <>
            <div className="section-courses--tablist">
                <div className="section-courses--tablist__container gray-border">
                  <nav>
                      
                  <ul className="Tabs">
                    {
                      courseTabs.map((courseTab, i) => (
                        <li
                          style={{ cursor: "pointer" }}
                          className="Tabs--item noselect  Tab"
                          onClick={() => {
                            setTabContent(fetchTabConent(courseTab.route));
                            setTabIndex(i);
                            
                          }}
                          key={courseTab.id}>
                          <div className="rendered_icon">
                            {renderIcon(courseTab.iconComponent)}
                          </div>
                          <div className="rendered_title">
                            <p className="f-size-p5">
                              {courseTab.title}
                            </p>
                        </div>
                          
                        </li>
                      ))
                    }
                    
                    </ul>
                    
                    </nav>
                </div>





                <div className="courses_content">
                  <div className="СontentReveal">
                    {tabIndex == 0 ? (
                      ReactHtmlParser(tabContent.html)
                    ) : tabIndex == 1 ? (
                      <div className="QuestionAnswerReveal">
                        {tabContent.questionAnswers.map((question, i: number) => (
                          <div className="question-answer" key={i}>
                            <div className="main-comment">
                              <div
                                style={{
                                  backgroundImage: `url(${question.imageUrl})`,
                                }}
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
                                  <p>{question.text}</p>
                                </div>
                                {/* <AnswerUserComments key={i} id={i} /> */}
                              </div>
                            </div>
                          </div>
                        )
                        )}
                      </div>
                    ) : tabIndex == 2 ? (
                      <>
                        {ReactHtmlParser(tabContent.html)}

                        <br />
                        <br />
                        {/* <div className="resources">
                          <div className="resources_files">
                            <NextLink
                              route={tabContent.resource.filePath}
                              className="btn btn-for-video-files"
                            >
                              <div className="files">
                                <h1>{tabContent.resource.title}</h1>

                                <div className="folder-icon icon">
                                  <Folder
                                    style={{
                                      fill: "#FFFFFF",
                                      color: "#FFFFFF",
                                    }}
                                    size={50}
                                  />
                                </div>
                              </div>
                            </NextLink>
                          </div>
                        </div> */}
                      </>
                    ) : tabIndex == 3 ? (
                      <>
                        <div className="estimates">
                          <div className="estimates__container">
                            {/* <InputCommentCards
                              id={1}
                              key={1}
                              name={"ბექა არაბიძე"}
                              rating={2}
                            /> */}
                            {tabContent.ratings.map((rating, i) => (
                              <>
                                <CommentCards
                                  key={i}
                                  id={rating.id}
                                  name={rating.userName}
                                  registrationDay={rating.datePosted}
                                  addedComment={rating.comment}
                                  imageUrl={rating.imageUrl}
                                  rating={rating.amountOfStars}
                                  like={rating.like}
                                  dislike={rating.dislike}
                                  isLikedByInstructor={rating.isLikedByInstructor}
                                  />
                              </>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
        </>
    )
}

export default course_tabs;