import { Upload } from "react-feather";

import { uploadAndRead } from "./utils/FileUploadLogic";





const FileUpload = () => {
  return (
    <div className="upload_container drag-and-drop_image">
      <div className="upload_dashed">

        <input type="file" id="file-upload" onChange={() => uploadAndRead()} />


        <label htmlFor="file-upload" className="heading f-size-p4 f-weight-b">
          <Upload size={70} stroke="var(--secondary-darker-grey)" />
          ფაილის ატრივრთვა
        </label>


      </div>

      <div id="preview"></div>
    </div>
  );
};

export default FileUpload;
