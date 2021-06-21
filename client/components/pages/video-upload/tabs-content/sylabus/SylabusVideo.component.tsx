
import { Upload } from "react-feather";
import { useState } from "react";

import { uploadAndRead } from "components/lib/upload/utils/FileUploadLogic";


import ChangeVideoName from "components/pages/video-upload/tabs-content/sylabus/SylabusChangeName.component"
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload";
import FileProperties from "components/lib/upload/FileProperties";



interface SylabusVideoComponent {
    id:number;
    name:string;
    duration:number;
    video_url:string;
}



const SylabusVideoComponent = ({id,name,duration,video_url}:SylabusVideoComponent) => {

    const [fileProperties, setFileProperties] = useState({ name: "", size: 0, type: "", base64: '' });
    const [fileUploadError, setFileUploadError] = useState("");




    return (
        <>
            


            <div className="sylabus-video" key={id}>


                <Button
                    color="blue"
                    size="medium"
                    disabled={false}
                    loading={false}
                    width="25rem"
                    icon={<Upload size={22} />}
                    type="submit">
                    <p className="f-weight-r f-size-p5">დამატება</p>
                </Button>

                <div className="sylabus-video-container">


                    <ChangeVideoName
                        chapterNumber={1}
                        chapterName={name}
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

                        <video src={video_url} controls autoPlay={false} />

                        <div className="fileUpload-errors">
                            <p className="form_errors f-size-p6 f-weight-r">
                                {fileUploadError}
                            </p>
                        </div>


                        <div className="duration">
                            <h1 className="f-size-p5 f-weight-r">ხანგძლივობა: {duration} წთ</h1>

                        </div>   


                        <FileProperties
                            name={fileProperties.name}
                            size={fileProperties.size}
                            type={fileProperties.type}
                        />
                    </div>


                </div>

            </div>
        </>
    )
}

export default SylabusVideoComponent
