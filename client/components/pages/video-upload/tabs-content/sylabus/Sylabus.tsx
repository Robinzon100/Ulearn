import { Upload } from "react-feather";
import { useEffect, useState } from "react";



import Button from "components/lib/button/Button";
import SylabusVideoComponent from "components/pages/video-upload/tabs-content/sylabus/SylabusVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/sylabus/SylabusChangeName.component";




const Sylabus = ({ data }) => {
    const [addComponent, setAddNewComponent] = useState(1);
    const [videoData, setVideoData] = useState<any>(data)

    const add = (id) => {
        setAddNewComponent(addComponent + id);
        setVideoData([...videoData.push({
            id: id + 1,
            name: "ჯავასკრიპტი",
            sub_videos: [
              {
                id: 1,
                name: "მეტი ჯავასკრიპტზე",
                duration: 15,
                video_url: "https://player.vimeo.com/external/488295369.sd.mp4?s=96338e16e3d0afae37be9399b9c67a4fb9efd063&profile_id=165&oauth2_token_id=57447761",
              },
            ],
          })])
          console.log(videoData)
          debugger
    }

    const remove = (id) => {
        setAddNewComponent(addComponent - id);
    }



    return (
        <>
            <section className="sylabus">




                {videoData.map((el, i: number) => (
                    <div className="sylabus-container" key={i}>


                        <div className="sylabus-video-add-btn">
                            <Button
                                color="blue"
                                size="medium"
                                onClick={() => add(el?.id)}
                                disabled={false}
                                loading={false}
                                width="25rem"
                                icon={<Upload size={22} />}
                                type="submit">
                                <p className="f-weight-r f-size-p5">დამატება</p>
                            </Button>
                        </div>

                        <div className="new-chapter" >

                            <ChangeChapterName
                                chapterNumber={el?.id}
                                chapterName={el?.name}
                                onClick={() => remove(el?.id)}
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
