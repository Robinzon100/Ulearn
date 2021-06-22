
import { Upload } from "react-feather";
import { useEffect, useState } from "react";


import { uploadAndRead } from "components/lib/upload/utils/FileUploadLogic";


import ChangeVideoName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component"
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload";
import FileProperties from "components/lib/upload/FileProperties";



interface CurriculumVideoComponent {
    id: number;
    // name: string;
    // duration: number;
    // video_url: string;
    sub_videos: any[]
    onClick?: any
    onRemove?: any
}



const CurriculumVideoComponent = ({ id, sub_videos, onClick, onRemove }: CurriculumVideoComponent) => {

    const [fileProperties, setFileProperties] = useState({ name: "", size: 0, type: "", base64: '' });
    const [fileUploadError, setFileUploadError] = useState("");


    useEffect(() => {
        console.log(sub_videos)
    }, [])

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

                {sub_videos && (
                    sub_videos.map((el, i) => (
                        <div className="curriculum-video-container" key={el.id}>


                            <ChangeVideoName
                                chapterNumber={i + 1}
                                chapterName={el.name}
                                onClick={() => onRemove(i)}
                            />


                            <div className="video-upload-section">
                                <FileUpload
                                    height="18rem"
                                    width="37rem"
                                    uploadSize={1000}
                                    disabled={false}
                                    icon={<Upload size={20} />}
                                    onError={(errorType) => setFileUploadError(errorType)}
                                    fileProperties={
                                        (name, size, type, base64) =>
                                            setFileProperties({ name, size, type, base64 })
                                    }
                                    accept=".mp4"
                                    onChange={(e) => {
                                        uploadAndRead(e)
                                    }}
                                />




                                {/* // FILE UPLOAD PROPERTIES*/}

                                <video src={el.video_url} controls autoPlay={false} />

                                <div className="fileUpload-errors">
                                    <p className="form_errors f-size-p6 f-weight-r">
                                        {fileUploadError}
                                    </p>
                                </div>


                                <div className="duration">
                                    <h1 className="f-size-p5 f-weight-r">ხანგძლივობა: {el.duration} წთ</h1>

                                </div>


                                <FileProperties
                                    name={fileProperties.name}
                                    size={fileProperties.size}
                                    type={fileProperties.type}
                                />
                            </div>


                        </div>
                    ))
                )}


            </div>
        </>
    )
}

export default CurriculumVideoComponent
