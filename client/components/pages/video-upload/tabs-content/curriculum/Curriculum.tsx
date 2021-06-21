import { Upload } from "react-feather";
import { useState } from "react";


import { ToggleElement } from "components/utils/helpers/ToggleElement";
import Button from "components/lib/button/Button";
import CurriculumVideoComponent from "components/pages/video-upload/tabs-content/curriculum/CurriculumVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";




const Curriculum = ({ data }) => {
    const [isToggled, setIsToggled] = useState({})
    const [videoData, setVideoData] = useState<any>(data)



    const add = () => {

        setVideoData([...videoData,
        {
            id: videoData[videoData.length - 1].id + 1,
            name: "ჯავასკრიპტი",
            sub_videos: [
                {
                    id: 1,
                    name: "",
                    duration: 0,
                    video_url: "",
                },
            ],
        }])
    }

    const remove = (id: number) => {
        if (id != 1) {
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
                        onClick={() => add()}
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

                        <div className="new-chapter" data-state={isToggled[el?.id]}>

                            <ChangeChapterName
                                chapterNumber={el?.id}
                                chapterName={el?.name}
                                onClick={() => remove(el.id)}
                                onToggle={() => ToggleElement(el?.id, setIsToggled)}
                            />


                            {el.sub_videos.map((sub) => (
                                <CurriculumVideoComponent
                                    key={sub?.id}
                                    id={sub?.id}
                                    name={sub?.name}
                                    duration={sub?.duration}
                                    video_url={sub?.video_url}
                                />
                            ))}

                        </div>
                    </div>

                ))}
            </section>
        </>
    );
};

export default Curriculum;
