
import { Eye } from "react-feather";
import Head from "next/head"
import { useEffect, useState } from 'react';

// import dynamic from "next/dynamic";



//! ==== COMPONENTS
import SideMenu from "components/lib/sidemenu/sideMenu";
import CoursesJson from "public/json/Courses.json";
import CourseTabContent from "components/pages/course_video/course_tabs/CourseTabContent";
import { GetServerSideProps } from 'next';

//! ==== ACTIONS
import { getUser } from "actions/client/user/profile/profile.action";
import { getCourse, getCourseComments } from 'actions/client/course/course.index.action';
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { useCommentStore } from "mobx/commentContext";
import { observer } from 'mobx-react-lite';
import { redirect } from 'components/utils/auth/redirect.utils';


// const CourseVideoPlayer = dynamic(() =>
//     import('components/pages/course_video/CourseVideoPlayer'),
//     { ssr: false }
// )




const MyCourse = observer(({ course, user, comments }: any) => {
    const [currentVideo, setCurrentVideo] = useState(course.course_content.curriculum[0].sub_videos[0].video_url)
    let { commentStore } = useCommentStore()




    useEffect(() => {
        if (commentStore) {
            commentStore.ratingComments = comments.length > 0 ? comments : []
            commentStore.currentComment = {
                text: '',
                rating: 1
            }
            commentStore.courseId = course.id
        }
    }, [])



    return (
        <>
            {commentStore && (
                <div className="courses-page">
                    <div className="courses-page--about">
                        <div className="courses-page--name">
                            <p className="f-size-p5">
                                <strong>{course.title}</strong>
                            </p>
                            <div className="viewers">
                                <Eye size={17} />
                                <p className="f-size-p7 f-weight-b">
                                    {course.student_amount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="courses-container">
                        <div className="section-courses">
                            <div id="player" className="section-courses--video-player">
                                {/* <CourseVideoPlayer src={`${process.env.BACK_END_URL}/api/videos/videoStream/${currentVideo}`} /> */}
                                <video
                                    preload='auto'
                                    controls src={`${process.env.BACK_END_URL}/api/videos/videoStream/${currentVideo}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'fill',
                                        borderRadius: '15px',
                                    }} />
                            </div>

                            {/* /// TAB HEADING CONTENT */}
                            <CourseTabContent
                                course={course}
                                user={user}
                            />
                        </div>


                        <div className="side-menu noselect ">
                            {course.course_content.curriculum.map((data, i) => (
                                <SideMenu
                                    id={i}
                                    key={i}
                                    name={data.name}
                                    courseChapterTime={45}
                                    content={data.sub_videos}
                                    onChange={(videoUrl) => setCurrentVideo(videoUrl)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
})



export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { courseId } = ctx.params;
    const { course, statusCode } = await getCourse(courseId);
    const { user } = await authenticatedRequest(getUser, null, ctx);
    const { comments } = await authenticatedRequest(getCourseComments, course.id, ctx)

    if (user == undefined) {
        return redirect("/login");
    }

    console.log(user);
    


    if (statusCode != 200) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            course,
            user,
            comments
        },
    };
}


export default MyCourse;
