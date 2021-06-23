import { Upload, Youtube } from "react-feather";
import { useState } from "react";

import { uploadAndRead } from "components/lib/upload/utils/FileUploadLogic";

import ChangeVideoName from "components/pages/video-upload/tabs-content/curriculum/CurriculumChangeName.component";
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload";
import { ToggleElement } from "components/utils/helpers/ToggleElement";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";




interface CurriculumVideoComponent {
  id: number;
  sub_videos: any[];
  onClick?: any;
  onRemove?: any;
}




const CurriculumVideoComponent = ({ id,sub_videos,onClick,onRemove }: CurriculumVideoComponent) => {


  const [isToggled, setIsToggled] = useState({})
  const [fileProperties, setFileProperties] = useState({name: "",size: 0,type: "",base64: ""});
  const [fileUploadError, setFileUploadError] = useState("");


  const uploadVideoHandler = ()  => {
      const video = new FormData();

      if (!fileUploadError) {

        fetch(fileProperties.base64)
          .then(res => {
            return res.blob();
          })
          .then(async (blob) => {
            video.append('course_curriculum_videos', blob);
            const { fileKey } = await authenticatedRequest(updateUserProfileImage, imgForm, null)
  
            if (fileKey) {
              updatedData.image_url = fileKey
              const res = await authenticatedRequest(updateUserProfile, updatedData, null);
              setAuthError("დაფიქსირდა შეცდომა.შეასწორეთ თქვენი მონაცემები")
  
  
              if (res.statusCode == 200) {
                setUserInfo({
                  full_name: res.update.full_name,
                  email: res.update.email,
                  description: res.update.description
                })
  
                parseSocials(res.update.socials, setUserSocials);
                setAuthError("")
              }
            }
  
          });
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
                  uploadSize={1000 * 30}
                  disabled={false}
                  icon={<Upload size={20} />}
                  onError={(errorType) => setFileUploadError(errorType)}
                  fileProperties={(name, size, type, base64) => {
                    setFileProperties({ name, size, type, base64 });
                  }
                    }
                  accept=".mp4"
                  onChange={(e) => {
                    uploadAndRead(e);
                  }}
                />




                <div className="file-size-name">
                  <Youtube />
                  <h1 className="f-size-p5 f-weight-r file_size">
                      {fileProperties.name} - {parseFloat(`${fileProperties.size / 1000}`).toPrecision(2)} MB
                  </h1>
                </div>


                <video src={el.video_url} controls autoPlay={false} />

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
