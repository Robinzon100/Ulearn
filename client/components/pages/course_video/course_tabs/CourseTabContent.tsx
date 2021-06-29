
import { useState } from "react";




//! ===========OUR IMPORTS
import CoursesJson from "../../../../public/json/Courses.json";
import CommentCards from "components/lib/comment_cards/comment_cards";
import QuestionAnswerCards from "components/lib/question-answer/QuestionAnswerCards";
import { MyCourseTabHeading } from "components/pages/course_video/course_tabs/MyCourseTabHeading";

import Tabs from "components/lib/tabs/Tabs";
import InputCommentCards from "components/lib/comment_cards/inputComment_cards";
import Button from "components/lib/button/Button";
import { downloadZipFileWithS3Key } from '../../../utils/file/zipFile.utils';
import { Folder } from 'react-feather';









const CourseTabContent = ({ course }) => {
  const questions = CoursesJson.questionAnswers.questionAnswers;
  const userComments = CoursesJson.ratings.ratings;

  const [, setTakenCommentVal] = useState()

  const inputCommentCardsValue = (value) => {
    console.log(value)
    setTakenCommentVal(value)
  }


  return (
    <>
      <div className="section-courses--tablist">
        <div className="section-courses--tablist__container gray-border">
          <Tabs
            tabNamesAndIcons={MyCourseTabHeading}
            rawHtml={[
              course.detailed_description,
              "",
              '',
              "",
            ]}
            component={[
              null,
              <>
                <InputCommentCards
                  id={1}
                  key={1}
                  name={"ბექა არაბიძე"}
                  rating={2}
                  onChange={(value) => inputCommentCardsValue(value)}
                />
                {questions.map((data) => (
                  <QuestionAnswerCards
                    id={data.id}
                    key={data.id}
                    imageUrl={data.imageUrl}
                    userName={data.userName}
                    text={data.text}
                    replies={data.replies}
                  />
                ))}
              </>,
              <>
                <Button
                  className="course-form-btn"
                  width="41rem"
                  size="large"
                  color="green"
                  icon={<Folder fill={'white'} />}
                  onClick={() => downloadZipFileWithS3Key(course.resource_file_url)}
                >
                  <p className="f-weight-r f-size-p4 ">რესურსების zip ფაილი</p>
                </Button>
              </>,

              <>
                <InputCommentCards
                  id={1}
                  key={1}
                  name={"ბექა არაბიძე"}
                  rating={2}
                  onChange={(value) => inputCommentCardsValue(value)}
                />

                {userComments.map(rating => (
                  <CommentCards
                    key={rating.id}
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

                ))}
              </>,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default CourseTabContent;
