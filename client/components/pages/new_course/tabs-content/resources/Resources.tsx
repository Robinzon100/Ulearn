import {  Upload } from "react-feather"
import { useState } from "react";


import FileUpload from "components/lib/upload/FileUpload"
import { uploadAndRead } from "components/lib/upload/utils/FileUploadLogic";
import { observer } from 'mobx-react-lite';
import { useNewCourseStore } from "mobx/newCourseStateContext";






const Resources = observer(() => {
    let { newCourseStore } = useNewCourseStore()
    const [fileUploadError, setFileUploadError] = useState("");
    const [file, setFile] = useState({ file: "", base64: "" });




    return (
        <>
            <div className="resources">
                <div className="resources__container">
                <div className="course-image">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">კურსის სურათი</h1>
                            <h2 className="f-size-p7 f-weight-bl">(სურათი უნდა იყოს 3 MB ნაკლები)</h2>
                        </div>


                        <div className="course-image__container">
                            <FileUpload
                                height="18rem"
                                uploadSize={300 * 10}
                                disabled={false}
                                icon={<Upload size={20} />}
                                onError={(errorType) => setFileUploadError(errorType)}
                                fileProperties={
                                    (file, base64) =>
                                        setFile({ file, base64 })
                                }
                                accept=".zip"
                                onChange={(e) => {
                                    uploadAndRead(e)
                                }}
                            />

                            <div className="thumbnail"
                                style={{ backgroundImage: `url(${file.base64})` }}
                            />
                        </div>

                    </div>



                    <div className="fileUpload-errors">
                        <p className="form_errors f-size-p6 f-weight-r">
                            {fileUploadError}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Resources
