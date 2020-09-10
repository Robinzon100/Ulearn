import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { Eye } from "react-feather";

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

export const Courses: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");

  const ref = useRef();

  const [revealHtml, setRevealHtml] = useState<string>(
    CoursesJson.content[0].html
  );

  const getHtml = (e) => {
    // debugger;
    const htmlContent = e.currentTarget.attributes["data-title"].nodeValue;
    // const currentText = ref.current;

    setRevealHtml(htmlContent);
  };

  useEffect(() => {
    //! კურსის გვერდზე ხაზის გადანაცვლების კოდი
    const colors = ["#338EFF", "#FF5C4D", "#00E267", "#FFD703"];
    let index = 1;
    const navComponent = document.querySelector<HTMLElement>(
      ".renderedContent_list"
    );
    const navArr = navComponent.querySelectorAll<HTMLElement>(
      ".renderedContent_list--item"
    );
    const navUnderLine = navComponent.querySelector<HTMLElement>(".underline");

    navUnderLine.style.backgroundColor = colors[0];

    navUnderLine.style.left = `${navArr[0].offsetLeft}px`;
    navUnderLine.style.width = `${navArr[0].offsetWidth}px`;

    navArr.forEach((navItem) => {
      let navLeftPos = navItem.offsetLeft;
      let navItemWidth = navItem.offsetWidth;
      //! ეს ანაცვლებს ფერებს რომ დაემთხვეს იმ დივს რომელიც საჭიროა
      let color = colors.shift();
      colors.push(color);

      navItem.addEventListener("click", (e) => {
        navUnderLine.style.left = `${navLeftPos}px`;
        navUnderLine.style.width = `${navItemWidth}px`;

        navUnderLine.style.backgroundColor = color;
        // navUnderLine.style.transition = " width 100s";
        // console.log(e.currentTarget);
      });
    });
  }, []);

  //! ეს არენდერებს აიქონებს ჯეისონიდან
  const renderIcon = (icon) => {
    if (icon == "აღწერა") {
      return <Description />;
    } else if (icon == "რესურსები") {
      return <Resources />;
    } else if (icon == "კითხვა-პასუხი") {
      return <QuestionAnswer />;
    } else if (icon == "შეფასებები") {
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
    <Fragment>
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
                    {CoursesJson
                      ? CoursesJson.content.map((coursesContent, i) => (
                          <li
                            className="renderedContent_list--item"
                            style={{ cursor: "pointer" }}
                            data-title={coursesContent.html}
                            onClick={(e) => {
                              getHtml(e);
                            }}
                            key={i}
                          >
                            <div className="rendered_icon">
                              {renderIcon(coursesContent.title)}
                            </div>
                            <div className="rendered_title">
                              <p className="heading-semi-bold-Noto paragraph-medium">
                                {coursesContent.title}
                              </p>
                            </div>
                          </li>
                        ))
                      : null}
                    <span className="underline"></span>
                  </ul>
                </div>

                {/* //! აქ გამოჩნდება კონტენტი */}

                <div className="courses_content" ref={ref}>
                  {/* //! === 4-ეს არის შეფასების ჰტმლი ===*/}
                  {/* <div className="estimates">
                    <div className="estimates__container">
                      <InputCommentCards name={"beqa"} comment={"sdgfg"} />
                      <CommentCards
                        name={"beqa"}
                        registrationDay={1}
                        addedComment={"bla"}
                      />
                    </div>
                  </div> */}

                  {/* //! === 4-ეს არის შეფასების ჰტმლი ===*/}

                  <div className="ResourvesReveal"></div>

                  {/* //! === 2-ეს არის კითხვა-პასუხის ჰტმლი ===*/}
                  <div className="QuestionAnswerReveal">
                    {/* <div className="question-answer">
                      <div className="main-comment">
                        <img
                          src="./pictures/courses/profile_picture.png"
                          className="main-comment__pic"
                        ></img>

                        <div className="main-comment__text">
                          <div className="about-user">
                            <div className="about-user__name">
                              <h1>სახელა სახელაშვილი</h1>
                            </div>
                            <div className="about-user__time">
                              <p>(1 წლის წინ)</p>
                            </div>
                          </div>
                          <div className="user-comment">
                            <p>
                              ვინმეს შეუძლია რომ დამეხმაროს კოდში ? რატომღაც
                              როცა ვაკეთებ console log(“welo world”) რათომღაც არ
                              მიწერს არაფერს
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
                    </div> */}
                  </div>

                  {/* //! === 2-ეს არის კითხვა-პასუხის ჰტმლი ===*/}

                  {/* //! აქ იპარსებია თხასავით*/}
                  <div className="СontentReveal">
                    {ReactHtmlParser(revealHtml)}

                    <div className="other_courses"></div>
                  </div>

                  {/* //! აქ გამოჩნდება კონტენტი */}
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
    </Fragment>
  );
};

export default Courses;
