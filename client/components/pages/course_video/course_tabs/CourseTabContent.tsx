
import {  useState } from "react";




//! ===========OUR IMPORTS
import CoursesJson from "../../../../public/json/Courses.json";
import CommentCards from "components/lib/comment_cards/comment_cards";
import { MyCourseTabHeading } from "components/pages/course_video/course_tabs/MyCourseTabHeading";

import Tabs from "components/lib/tabs/Tabs";
import InputCommentCards from "components/lib/comment_cards/inputComment_cards";
import Button from "components/lib/button/Button";
import { downloadZipFileWithS3Key } from '../../../utils/file/zipFile.utils';
import { Folder } from 'react-feather';
import { observer } from 'mobx-react-lite';
import { useCommentStore } from "mobx/commentContext";









const CourseTabContent = observer(({ course, user }: any) => {
    let { commentStore } = useCommentStore()

    const comments = CoursesJson.ratings.ratings;
    const [commentBody, setCommentBody] = useState("")
    const [userComments, setUserComments] = useState<any>(comments)


    // === GETTING CURRENT RATING TO PASS TO ACTION
    const getCurrentRating = (currentRating, id) => {
        console.log({ currentRating, id })
    }


    const addComment = () => {
        // debugger
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
                            '',
                            "",
                        ]}
                        component={[
                            null,

                            <>
                                <Button
                                    className="get-resources-btn"
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
                                {commentStore.ratingComments &&
                                    <>
                                        <InputCommentCards
                                            id={user.id}
                                            full_name={user.full_name}
                                            rating={user.rating}
                                            image_url={user.image_url}
                                            getCommentBody={(value) => setCommentBody(value)}
                                            addComment={() => addComment()}
                                        />

                                        {commentStore.ratingComments.map(el => (
                                            <CommentCards
                                                key={el.id}
                                                id={el.id}
                                                full_name={el.user.full_name}
                                                comment={el.text}
                                                image_url={el.user.image_url}
                                                rating={el.rating}
                                                getCurrentRating={(value, id) => getCurrentRating(value, id)}
                                            />
                                        ))}
                                    </>
                                }
                            </>,
                        ]}

                    />
                </div>
            </div>
        </>
    );
})

export default CourseTabContent;
