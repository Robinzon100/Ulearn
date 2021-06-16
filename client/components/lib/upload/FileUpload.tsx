import { useState, ReactNode,useRef } from 'react';


import { ReturnFileSize } from "components/lib/upload/utils/FileUploadLogic"

interface IFileUpload {
  width?: string,
  height?: string,
  title?: string,
  onChange: any,
  disabled?: boolean,
  icon?: ReactNode,
  multiple?:boolean,
  uploadSize?:number,
  onError?:any,
  fileType?:any,
}




const FileUpload = ({
  width = "100%",
  height = "100%",
  title = 'სურათის ატვირთვა',
  disabled,
  onChange,
  icon,
  multiple= false,
  uploadSize = 550,
  onError,
  fileType = "image"
 }: IFileUpload) => {
  
  const [isDragged, setIsDragged] = useState(false);

  return (
    <>
      <div className="upload_container drag-and-drop_image">
        <div className="upload_dashed">

        <input
            type=""
            id="file-upload"
            disabled={disabled}
            multiple={multiple}
            onChange={(e) => 
                {onChange();ReturnFileSize(e,uploadSize,onError,fileType)}}
            size={uploadSize * 1000}
            onDragOver={() => setIsDragged(true)}
            onDragLeave={() => setIsDragged(false)} 
            accept=".jpg, .jpeg, .png"
        />

          <label htmlFor="file-upload" className="heading f-size-p5 f-weight-b">
            {icon}
            {isDragged ? 'ატვირთვა' : title}
          </label>

        </div>


      </div>


      <style jsx>
        {`
        .upload_container {
            width: ${width};
            height: ${height};
        }

        .upload_dashed{
          border-color: ${isDragged ? "var(--primary-blue)" : ''}
        }
        `}
      </style>
    </>
  );
};

export default FileUpload;
