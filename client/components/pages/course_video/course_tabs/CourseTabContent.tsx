
import { useEffect, useState } from "react";




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









const CourseTabContent = ({ course, user }) => {
    const questions = CoursesJson.questionAnswers.questionAnswers;
    const comments = CoursesJson.ratings.ratings;

    const [commentBody, setCommentBody] = useState("")

    const [userComments, setUserComments] = useState<any>(comments)


    // === GETTING CURRENT RATING TO PASS TO ACTION
    const getCurrentRating = (currentRating, id) => {
        console.log({ currentRating, id })
    }


    const addComment = () => {
        debugger
        userComments.push({
            id: userComments[userComments.length - 1].id + 1,
            comment: commentBody,
            image_url: user.image_url,
            full_name: user.full_name,
            rating: user.rating
        })

        setUserComments(userComments => ([...userComments]))
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
                                    id={user.id}
                                    full_name={user.full_name}
                                    rating={user.rating}
                                    image_url={user.image_url}
                                    getCommentBody={(value) => setCommentBody(value)}
                                    addComment={() => addComment()}
                                />

                                {userComments.map(el => (
                                    <CommentCards
                                        key={el.id}
                                        id={el.id}
                                        full_name={el.full_name}
                                        comment={el.comment}
                                        image_url={el.image_url}
                                        rating={el.rating}
                                        getCurrentRating={(value, id) => getCurrentRating(value, id)}
                                    // like={el.like}
                                    // dislike={el.dislike}
                                    // isLikedByInstructor={el.isLikedByInstructor}
                                    />

                                ))}
                            </>


                        ]}

                    />
                </div>
            </div>
        </>
    );
};

export default CourseTabContent;
