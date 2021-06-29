import { Upload, Folder } from "react-feather"
import { useState } from "react";


import FileUpload from "components/lib/upload/FileUpload"
import { observer } from 'mobx-react-lite';
import { useNewCourseStore } from "mobx/newCourseStateContext";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { postCourseImage } from "actions/client/course/newCourse/courseInfo.action";
// import { downloadZipFileWithS3Key } from '../../../../utils/file/zipFile.utils';






const Resources = observer(() => {
    let { newCourseStore } = useNewCourseStore()
    const [fileUploadError, setFileUploadError] = useState("");
    const [file, setFile] = useState<any>({ file: "" });

    const [fileLoading, setFileLoading] = useState(false);


    const fileOnChangeHandler = async (e) => {
        if (!fileUploadError) {
            setFileLoading(true)

            const imgForm = new FormData();
            imgForm.append('course_image', e.currentTarget.files[0]);
            const { fileKey } = await authenticatedRequest(postCourseImage, imgForm, null);


            if (fileKey)
                newCourseStore.newCourseData.courseInfo.resource_file_url = fileKey;
                setFileLoading(false)
        }
    }


    return (
        <>
            <div className="resources">
                <div className="resources__container">
                    <div className="course-image">



                        <div className="course-image__container">

                            <div className="heading">
                                <h1 className="f-size-p5 f-weight-bl">
                                    რესურსის ფაილის ატვირთვა

                                    <br />

                                    <span className="f-size-p7 f-weight-r">
                                        (უნდა იყოს 3 MB ნაკლები, მხოლოდ zip ფაილი )
                                    </span>
                                </h1>


                            </div>
                            <FileUpload
                                height="18rem"
                                uploadSize={300 * 10}
                                disabled={false}
                                isLoading={fileLoading}
                                icon={<Upload size={20} />}
                                onError={(errorType) => setFileUploadError(errorType)}
                                fileProperties={
                                    (file) =>
                                        setFile({ file })
                                }
                                accept=".zip"
                                onChange={(e) => {
                                    fileOnChangeHandler(e)
                                }}
                            />


                            {newCourseStore.newCourseData.courseInfo.resource_file_url.length > 0 &&
                                <div className="file-size-name">
                                    <Folder />
                                    <h1 className="f-size-p5 f-weight-r file_size">
                                        {newCourseStore.newCourseData.courseInfo.resource_file_url}
                                        {parseFloat(`${+file.file.size / 1000 / 1000}`).toPrecision(2) != "NaN" ?

                                            " - " + parseFloat(`${+file.file.size / 1000 / 1000}`).toPrecision(2) + " MB " : " "}
                                    </h1>

                                </div>
                            }
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
