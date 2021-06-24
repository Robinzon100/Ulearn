import { Upload } from "react-feather";
import { useState } from 'react';


// ========== COMPONENTS

import { ToggleElement } from "components/utils/helpers/ToggleElement";
import Button from "components/lib/button/Button";
import dynamic from 'next/dynamic'
// import CurriculumVideoComponent from "components/pages/video-upload/tabs-content/curriculum/CurriculumVideo.component";

const CurriculumVideoComponent = dynamic(() => import('components/pages/video-upload/tabs-content/curriculum/CurriculumVideo.component'), { ssr: false })
import ChangeChapterName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";


// ========== ACTIONS

import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { deleteCurriculumVideo } from "actions/client/course/newCourse/curriculum.action";






const Curriculum = ({ data }) => {
    const [isToggled, setIsToggled] = useState({})
    const [videoData, setVideoData] = useState<any>(data)
    const [error, setError] = useState({
        newChapterErr: "",
        newVideoErr: ""
    })




    const add = (condition, id?) => {
        const lastChapterId = videoData[videoData.length - 1].id;


        if (videoData[videoData.length - 1]?.id == 0 || videoData[id]?.sub_videos.length == 0)
            setError({ newChapterErr: "", newVideoErr: "" })


        if (condition === "main_videos") {
            setVideoData([...videoData,
            {
                id: lastChapterId + 1,
                name: "თავის სახელწოდება",
                sub_videos: [
                    {
                        id: 1,
                        name: "",
                        duration: 0,
                        video_url: "",
                    },
                ],
            }])
        } else {
            const lastSubVideoId = videoData[id].sub_videos[videoData[id].sub_videos.length - 1].id
            videoData[id].sub_videos.push(
                {
                    id: lastSubVideoId + 1,
                    name: "",
                    duration: 0,
                    video_url: ""
                }
            )
            setVideoData(newVideoData => ([...newVideoData]))
        }
    }







    const remove = async (chapterId: number, videoId?: number) => {

        if (videoId == undefined) {
            if (chapterId != 0 || videoData.length != 1) {
                setVideoData(
                    [...videoData.
                        filter(el => el.id != chapterId)]
                        .map((chapter, i) => Object.assign(chapter, { id: i })))
            } else {
                setError({ newChapterErr: "უნდა არსებობდეს ერთი თავი მაინც", newVideoErr: "" })
            }
        } else {
            if (videoId != 0 || videoData[chapterId].sub_videos.length != 1) {

                await authenticatedRequest(
                    deleteCurriculumVideo,
                    videoData[chapterId].sub_videos[videoId].video_url,
                    null)

                videoData[chapterId].sub_videos = videoData[chapterId].sub_videos
                    .filter(el => el.id != videoId)
                    .map((video, i) => Object.assign(video, { id: i }))
                setVideoData(newVideoData => ([...newVideoData]))

            } else {
                setError({ newChapterErr: "", newVideoErr: "უნდა არსებობდეს ერთი ვიდეო გაკვეთილი მაინც" })
            }
        }
    }


    const addVideoUrlToData = (chapterId, videoId, videoKey) => {
        videoData[chapterId].sub_videos[videoId] =
        {
            ...videoData[chapterId].sub_videos[videoId],
            video_url: `${videoKey}`
        }

        setVideoData(newVideoData => ([...newVideoData]))
    }



    return (
        <>
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


                {videoData.map((el, i: number) => (
                    <div className="curriculum-container" key={i}>

                        <div className="new-chapter" data-open={isToggled[el?.id]}>

                            <ChangeChapterName
                                chapterNumber={el?.id + 1}
                                chapterName={el?.name}
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
                                sub_videos={videoData[i].sub_videos}
                                onClick={() => add("sub_videos", i)}
                                onRemove={(videoId) => remove(el.id, videoId)}
                                onUpload={(videoId, videoKey) => addVideoUrlToData(i, videoId, videoKey)}
                            />

                        </div>
                    </div>

                ))}
            </section>
        </>
    );
};

export default Curriculum;
