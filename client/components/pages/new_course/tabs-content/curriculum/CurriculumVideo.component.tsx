import { Upload, Youtube } from "react-feather";
import React, { useState, useRef } from 'react';

import ChangeVideoName from "components/pages/new_course/tabs-content/curriculum/CurriculumChangeName.component";
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload";
import { ToggleElement } from "components/utils/helpers/ToggleElement";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { postCurriculumVideo } from "actions/client/course/newCourse/curriculum.action";
import { getVideoDuration } from "components/utils/helpers/getVideoDuration"
import { observer } from 'mobx-react-lite';
import { useNewCourseStore } from '../../../../../mobx/newCourseStateContext';


interface CurriculumVideoComponent {
    id: number;
    sub_videos: any[];
    onClick?: any;
    onRemove?: any;
    onUpload?: any;
}




const CurriculumVideoComponent = observer(({ id, sub_videos, onClick, onRemove, onUpload }: CurriculumVideoComponent) => {
    let { newCourseStore } = useNewCourseStore()
    const videoElement = useRef(null)
    const [isToggled, setIsToggled] = useState({})
    const [file, setFile] = useState<any>({ file: "", base64: "" });
    const [fileUploadError, setFileUploadError] = useState("");
    const [videoIsUploading, setVideoIsUploading] = useState<boolean>(false)



    const uploadVideoHandler = async (videoId, { currentTarget }: any) => {
        setVideoIsUploading(true)


        if (!fileUploadError) {
            const videoForm = new FormData();
            videoForm.append('course_curriculum_videos', currentTarget.files[0]);
            const { fileKey } = await authenticatedRequest(postCurriculumVideo, videoForm, null)

            if (fileKey) {
                const videoDuration = await getVideoDuration(currentTarget.files[0]) as any

                let minutes = Math.floor(videoDuration.duration / 60);
                let seconds = Math.floor(videoDuration.duration - minutes * 60);

                newCourseStore.newCourseData
                    .curriculum[id]
                    .sub_videos[videoId].duration = +`${minutes}.${seconds < 10 ? seconds : "0" + seconds}`

                newCourseStore.newCourseData.courseInfo.duration += +`${minutes}.${seconds < 10 ? seconds : "0" + seconds}`

                onUpload(videoId, fileKey)
                setFileUploadError("")
                setVideoIsUploading(false)
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
                                onClick={() => onRemove(i)}
                                onToggle={() => ToggleElement(el?.id, setIsToggled)}
                                chapterId={id}
                                videoId={i}
                            />




                            <div className="video-upload-section">
                                <FileUpload
                                    key={el.id}
                                    height="18rem"
                                    width="37rem"
                                    isLoading={videoIsUploading}
                                    disabled={videoIsUploading}
                                    uploadSize={1000 * 50}
                                    icon={<Upload size={20} />}
                                    onError={(errorType) => setFileUploadError(errorType)}
                                    fileProperties={(file, base64) => {
                                        setFile({ file, base64 });
                                    }}
                                    accept=".mp4"
                                    ref={videoElement}
                                    onChange={(e) => {
                                        uploadVideoHandler(i, e)
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

                                        <video
                                            typeof='video/mp4'
                                            controls
                                            autoPlay={true}
                                            muted={true}
                                            preload={`none`}>
                                            <source
                                                src={`${process.env.BACK_END_URL}/api/videos/videoStream/${el.video_url}`}
                                                type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                                        </video>
                                    </>
                                }

                                <div className="fileUpload-errors">
                                    <p className="form_errors f-size-p6 f-weight-r">
                                        {fileUploadError}
                                    </p>
                                </div>

                                <div className="duration">
                                    <h1 className="f-size-p5 f-weight-r">
                                        ხანგძლივობა: {newCourseStore.newCourseData.curriculum[id].sub_videos[i].duration}  წთ
                                    </h1>
                                </div>
                            </div>


                        </div>
                    ))}
            </div>
        </>
    );
});

export default CurriculumVideoComponent;
