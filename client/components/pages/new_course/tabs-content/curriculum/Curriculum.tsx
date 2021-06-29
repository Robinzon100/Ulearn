import { Upload } from "react-feather";
import { useState } from 'react';


// ========== COMPONENTS

import { ToggleElement } from "components/utils/helpers/ToggleElement";
import Button from "components/lib/button/Button";
import dynamic from 'next/dynamic'


const CurriculumVideoComponent = dynamic(() => import('components/pages/new_course/tabs-content/curriculum/CurriculumVideo.component'), { ssr: false })
import ChangeChapterName from "components/pages/new_course/tabs-content/curriculum/CurriculumChangeName.component";


// ========== ACTIONS

import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { deleteCurriculumVideo } from "actions/client/course/newCourse/curriculum.action";
import { useNewCourseStore } from "mobx/newCourseStateContext";
import { observer } from 'mobx-react-lite';






const Curriculum = observer(() => {
    const { newCourseStore } = useNewCourseStore()
    
    const [isToggled, setIsToggled] = useState({})
    const [error, setError] = useState({
        newChapterErr: "",
        newVideoErr: ""
    })




    const add = (condition, id?) => {
        if (newCourseStore.newCourseData.curriculum[newCourseStore.newCourseData.curriculum.length - 1]?.id == 0 ||
            newCourseStore.newCourseData.curriculum[id]?.sub_videos.length == 0)
            setError({ newChapterErr: "", newVideoErr: "" })

        if (condition === "main_videos") {
            const lastChapterId = newCourseStore.newCourseData.curriculum
            [newCourseStore.newCourseData.curriculum.length - 1].id;

            newCourseStore.newCourseData.curriculum.push(
                {
                    id: lastChapterId + 1,
                    name: "თავის სახელი",
                    sub_videos: [
                        {
                            id: 1,
                            name: "ვიდეოს სახელი",
                            duration: 0,
                            video_url: "",
                        },
                    ],
                })


        } else {
            const lastSubVideoId =
                newCourseStore.newCourseData.curriculum[id]
                    .sub_videos[newCourseStore.newCourseData.curriculum[id]
                        .sub_videos.length - 1].id


            newCourseStore.newCourseData.curriculum[id].sub_videos.push(
                {
                    id: lastSubVideoId + 1,
                    name: "ვიდეოს სახელი",
                    duration: 0,
                    video_url: ""
                }
            )
        }

    }







    const remove = async (chapterId: number, videoId?: number) => {

        if (videoId == undefined) {
            if (chapterId != 0 || newCourseStore.newCourseData.curriculum.length != 1) {
                newCourseStore.newCourseData.curriculum = newCourseStore.newCourseData.curriculum
                    .filter(el => el.id != chapterId)
                    .map((chapter, i) => Object.assign(chapter, { id: i }))
            } else {
                setError({ newChapterErr: "უნდა არსებობდეს ერთი თავი მაინც", newVideoErr: "" })
            }
        } else {
            if (videoId != 0 || newCourseStore.newCourseData.curriculum[chapterId].sub_videos.length != 1) {
                await authenticatedRequest(
                    deleteCurriculumVideo,
                    newCourseStore.newCourseData.curriculum[chapterId].sub_videos[videoId].video_url,
                    null)

                newCourseStore.newCourseData.curriculum[chapterId].sub_videos =
                    newCourseStore.newCourseData.curriculum[chapterId].sub_videos
                        .filter(el => el.id != videoId)
                        .map((video, i) => Object.assign(video, { id: i }))
            } else {
                setError({ newChapterErr: "", newVideoErr: "უნდა არსებობდეს ერთი ვიდეო გაკვეთილი მაინც" })
            }
        }
    }


    const addVideoUrlToData = (chapterId, videoId, videoKey) => {
        newCourseStore.newCourseData.curriculum[chapterId].sub_videos[videoId] =
        {
            ...newCourseStore.newCourseData.curriculum[chapterId].sub_videos[videoId],
            video_url: `${videoKey}`
        }
    }



    return (
        <>
            {newCourseStore.newCourseData.curriculum &&
                (
                    <section className="curriculum">
                        <div className="curriculum-video-add-btn">
                            <Button
                                color="blue"
                                size="medium"
                                onClick={() => add("main_videos")}
                                disabled={false}
                                loading={false}
                                width="25rem"
                                icon={<Upload size={22} />}
                                type="submit">
                                <p className="f-weight-r f-size-p5">დამატება</p>
                            </Button>
                        </div>


                        {newCourseStore.newCourseData.curriculum.map((el, i: number) => (
                            <div className="curriculum-container" key={i}>

                                <div className="new-chapter" data-open={isToggled[el?.id]}>

                                    <ChangeChapterName
                                        chapterNumber={el?.id + 1}
                                        onClick={() => remove(el.id)}
                                        onToggle={() => ToggleElement(el?.id, setIsToggled)}
                                        chapterId={i}
                                    />
                                    <div className="video_upload-errors">
                                        <h1 className="color: red; f-size-p6 f-weight-r">{error.newChapterErr}</h1>
                                        <h1 className="color: red; f-size-p6 f-weight-r">{error.newVideoErr}</h1>
                                    </div>



                                    <CurriculumVideoComponent
                                        key={i}
                                        id={i}
                                        sub_videos={newCourseStore.newCourseData.curriculum[i].sub_videos}
                                        onClick={() => add("sub_videos", i)}
                                        onRemove={(videoId) => remove(el.id, videoId)}
                                        onUpload={(videoId, videoKey) => addVideoUrlToData(i, videoId, videoKey)}
                                    />

                                </div>
                            </div>

                        ))}
                    </section>
                )}
        </>
    );
});

export default Curriculum;
