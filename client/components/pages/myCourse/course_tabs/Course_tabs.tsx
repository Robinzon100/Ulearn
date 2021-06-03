import { useState } from "react";
import ReactHtmlParser from "react-html-parser";






//! ===========OUR IMPORTS
import CoursesJson from "../../../../public/json/Courses.json";
import CommentCards from "components/lib/comment_cards/comment_cards";






const Course_tabs = () => {
  const [tabIndex, ] = useState<number>(0);
  const [tabContent, ] = useState<any>(CoursesJson.description);





  return (
    <>
      <div className="section-courses--tablist">
        <div className="section-courses--tablist__container gray-border">
          {/* <Tabs
            iconsToRender={renderIcon}
            tabsToRender={courseTabsToRender}
            contentTofetch={fetchTabContent}
            setTabIndex={setTabIndex}
            setTabContent={setTabContent}
          /> */}
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
                ))}
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
  );
};

export default Course_tabs;
