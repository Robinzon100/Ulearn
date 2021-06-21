import { Upload } from "react-feather";
import { useEffect, useState } from "react";



import Button from "components/lib/button/Button";
import SylabusVideoComponent from "components/pages/video-upload/tabs-content/sylabus/SylabusVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/sylabus/SylabusChangeName.component";




const Sylabus = ({ data }) => {
    const [addComponent, setAddNewComponent] = useState(1);
    const [videoData, setVideoData] = useState<any>(data)

    const add = () => {
        console.log(videoData[videoData.length - 1]);

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
        setVideoData(
            [...videoData.filter(el => el.id != id)].map((chapter, i) => {
                return Object.assign(chapter, { id: i + 1 })
            }))

    }



    return (
        <>
            <section className="sylabus">
                <div className="sylabus-video-add-btn">
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
                    <div className="sylabus-container" key={i}>




                        <div className="new-chapter" >

                            <ChangeChapterName
                                chapterNumber={el?.id}
                                chapterName={el?.name}
                                onClick={() => remove(el.id)}
                            />


                            {el.sub_videos.map((sub, i) => (
                                <SylabusVideoComponent
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

export default Sylabus;
