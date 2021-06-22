import { Upload } from "react-feather";
import { useState, useEffect } from 'react';


import { ToggleElement } from "components/utils/helpers/ToggleElement";
import Button from "components/lib/button/Button";
import CurriculumVideoComponent from "components/pages/video-upload/tabs-content/curriculum/CurriculumVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";




const Curriculum = ({ data }) => {
    const [isToggled, setIsToggled] = useState({})
    const [videoData, setVideoData] = useState<any>(data)
    const [subVideos, setSubVideos] = useState<any>()
    // const [sub_videos, setSub_videos] = useState(data[data.length - 1].sub_videos)


    const add = (condition, id?) => {
        const lastChapterId = videoData[videoData.length - 1].id;

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







    const remove = (chapterId: number, videoId?: number) => {
        if (videoId == undefined) {
            if (chapterId != 0 || videoData.length != 1) {
                setVideoData(
                    [...videoData.
                        filter(el => el.id != chapterId)]
                        .map((chapter, i) => Object.assign(chapter, { id: i })))
            }
        } else {
            if (videoId != 0 || videoData[chapterId].sub_videos.length != 1) {
                videoData[chapterId].sub_videos = videoData[chapterId].sub_videos
                    .filter(el => el.id != videoId)
                    .map((video, i) => Object.assign(video, { id: i }))

                setVideoData(newVideoData => ([...newVideoData]))
            }

        }
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
                            />


                            <CurriculumVideoComponent
                                key={el.i}
                                id={el.id}
                                sub_videos={videoData[i].sub_videos}
                                onClick={() => add("sub_videos", i)}
                                onRemove={(videoId) => remove(el.id, videoId)}
                            />

                        </div>
                    </div>

                ))}
            </section>
        </>
    );
};

export default Curriculum;
