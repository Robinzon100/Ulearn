import { Upload } from "react-feather";
import { useState } from "react";


import { ToggleElement } from "components/utils/helpers/ToggleElement";
import Button from "components/lib/button/Button";
import CurriculumVideoComponent from "components/pages/video-upload/tabs-content/curriculum/CurriculumVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";




const Curriculum = ({ data }) => {
    const [isToggled, setIsToggled] = useState({})
    const [videoData, setVideoData] = useState<any>(data)
    // const [sub_videos, setSub_videos] = useState(data[data.length - 1].sub_videos)


    const add = (condition,id?) => {
        debugger
        const lastChapterId = videoData[videoData.length - 1].id;

        if(condition === "main_videos") {
            setVideoData([...videoData,
                {
                    id:  lastChapterId + 1,
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
        }else {
            const lastSubVideoId = videoData[id].sub_videos[videoData[id].sub_videos.length - 1] 

            setVideoData([...videoData,
                {
                    id: 1,
                    sub_videos: [
                        {
                            id: lastSubVideoId + 1,
                            name: "თავში ახალი ვიდეო",
                            duration: 0,
                            video_url: "https://player.vimeo.com/external/191381863.sd.mp4?s=55cc5d1ba603cb56af5242ab115b45aefb2fae2f&profile_id=164&oauth2_token_id=57447761",
                        },
                    ],
                }])
        }
    }

    const remove = (id: number) => {
        // debugger
        if (id != 1 || videoData.length != 1) {
            setVideoData(
                [...videoData.filter(el => el.id != id)].map((chapter, i) => {
                    return Object.assign(chapter, { id: i + 1 })

                }))
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
                                chapterNumber={el?.id}
                                chapterName={el?.name}
                                onClick={() => remove(el.id)}
                                onToggle={() => ToggleElement(el?.id, setIsToggled)}
                            />


                            
                                <CurriculumVideoComponent
                                    key={el.i}
                                    id={el.id}
                                    sub_videos={el.sub_videos}
                                    onClick={() => add("sub_videos",i)}
                                />

                        </div>
                    </div>

                ))}
            </section>
        </>
    );
};

export default Curriculum;
