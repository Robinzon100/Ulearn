import { Upload, Youtube } from "react-feather";
import React, { useState, useRef } from 'react';

import ChangeVideoName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload";
import { ToggleElement } from "components/utils/helpers/ToggleElement";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { postCurriculumVideo } from "actions/client/course/newCourse/curriculum.action";



interface CurriculumVideoComponent {
    id: number;
    sub_videos: any[];
    onClick?: any;
    onRemove?: any;
    onUpload?: any;
}




const CurriculumVideoComponent = ({ id, sub_videos, onClick, onRemove, onUpload }: CurriculumVideoComponent) => {
    const videoElement = useRef(null)



    const [isToggled, setIsToggled] = useState({})
    const [file, setFile] = useState<any>({ file: "", base64: "" });
    const [fileUploadError, setFileUploadError] = useState("");



    const uploadVideoHandler = async (videoId, videoEl: React.RefObject<HTMLInputElement>) => {
        const videoForm = new FormData();

        if (!fileUploadError) {
            videoForm.append('course_curriculum_videos', videoEl.current.files[0]);
            const { fileKey } = await authenticatedRequest(postCurriculumVideo, videoForm, null)

            //   console.log(fileKey)

            if (fileKey) {
                onUpload(videoId, fileKey)
                setFileUploadError("")
            } else {
                setFileUploadError("ვერ მოხერხდა ფაილის ატვირთვა")
            }
        }
    }



    return (
        <>
            <div className="curriculum-video" key={id}>


                <Button
                    color="blue"
                    size="medium"
                    disabled={false}
                    loading={false}
                    width="25rem"
                    icon={<Upload size={22} />}
                    onClick={onClick}
                    type="submit">
                    <p className="f-weight-r f-size-p5">დამატება</p>
                </Button>





                {sub_videos &&
                    sub_videos.map((el, i) => (
                        <div className="curriculum-video-container"
                            data-open={isToggled[el?.id]}
                            key={el.id}>


                            <ChangeVideoName
                                chapterNumber={i + 1}
                                chapterName={el.name}
                                onClick={() => onRemove(i)}
                                onToggle={() => ToggleElement(el?.id, setIsToggled)}
                                chapterId={id}
                                videoId={i}
                            />




                            <div className="video-upload-section">
                                <FileUpload
                                    height="18rem"
                                    width="37rem"
                                    uploadSize={1000 * 300}
                                    disabled={false}
                                    icon={<Upload size={20} />}
                                    onError={(errorType) => setFileUploadError(errorType)}
                                    fileProperties={(file, base64) => {
                                        setFile({ file, base64 });
                                    }}
                                    accept=".mp4"
                                    ref={videoElement}
                                    onChange={() => {
                                        uploadVideoHandler(i, videoElement)
                                    }}
                                />



                                {el.video_url != "" && 
                                    <>
                                        <div className="file-size-name">
                                            <Youtube />
                                            <h1 className="f-size-p5 f-weight-r file_size">
                                                {file.file.name} - {parseFloat(`${+file.file.size / 1000 / 1000}`).toPrecision(2)} MB
                                            </h1>
                                        </div>

                                        <video src={`${process.env.BACK_END_URL}/api/videos/${el.video_url}`} controls autoPlay={false} />
                                    </>
                                }

                                <div className="fileUpload-errors">
                                    <p className="form_errors f-size-p6 f-weight-r">
                                        {fileUploadError}
                                    </p>
                                </div>

                                <div className="duration">
                                    <h1 className="f-size-p5 f-weight-r">
                                        ხანგძლივობა: {el.duration} წთ
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default CurriculumVideoComponent;
