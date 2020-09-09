import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { Eye, Star, Clipboard, Folder, HelpCircle } from "react-feather";

//! ==== OTHER IMPORTS
import BaseLayout from "components/base-layout";
import SideMenu from "components/sideMenu";
import CommentCards from "components/global_components/comment_cards/comment_cards";
import InputCommentCards from "components/global_components/comment_cards/inputComment_cards";
import CoursesJson from "../public/json/Courses.json";

export const Courses: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");

  const ref = useRef();

  const [revealHtml, setRevealHtml] = useState<string>(
    CoursesJson.content[0].html
  );

  const getHtml = (e) => {
    // debugger;
    const htmlContent = e.currentTarget.attributes["data-title"].nodeValue;
    const currentText = ref.current;
    setRevealHtml(htmlContent);
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
                  {CoursesJson
                    ? CoursesJson.content.map((coursesContent, i) => (
                        <p
                          style={{ cursor: "pointer" }}
                          className="heading-semi-bold-Noto paragraph-medium"
                          data-title={coursesContent.html}
                          onClick={(e) => {
                            getHtml(e);
                          }}
                          key={i}
                        >
                          {coursesContent.title}
                        </p>
                      ))
                    : null}
                  {/* <div className="tablist_description flex-container four-color-border">
                   

                    <div className="tablist_description--clipboard">
                      <Clipboard style={{ color: "#338EFF" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        აღწერა
                      </p>
                    </div>
                  </div>
                  <div className="tablist_question flex-container four-color-border">
                    <div className="tablist_description--question">
                      <HelpCircle style={{ color: "#FF5C4D" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        კითხვა-პასუხი
                      </p>
                    </div>
                  </div>

                  <div className="tablist_resources flex-container four-color-border">
                    <div className="tablist_description--folder">
                      <Folder style={{ color: "#00E267" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        რესურსები
                      </p>
                    </div>
                  </div>

                  <div className="tablist_rate flex-container four-color-border">
                    <div className="tablist_description--star">
                      <Star style={{ color: "#FFD703" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        შეფასებები
                      </p>
                    </div>
                  </div> */}
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
