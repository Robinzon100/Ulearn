import { useState, ReactNode } from 'react';


import { ReturnFileSizeAndType } from "components/lib/upload/utils/FileUploadLogic"



interface IFileUpload {
  width?: string,
  height?: string,
  title?: string,
  onChange: any,
  disabled?: boolean,
  icon?: ReactNode,
  multiple?: boolean,
  uploadSize: number,
  onError: any,
  accept: string
  fileProperties?: any;
}




const FileUpload = ({
  width = "100%",
  height = "100%",
  title = 'ფაილის ატვირთვა',
  disabled,
  onChange,
  icon,
  multiple = false,
  //! UPLOADSIZE იგულისხმება ბაიტებში
  uploadSize = 50,
  onError,
  accept,
  fileProperties
}: IFileUpload) => {

  const [isDragged, setIsDragged] = useState(false);

  return (
    <>
      <div className="upload_container drag-and-drop_image">
        <div className="upload_dashed">

          <input
            type='file'
            id="file-upload"
            disabled={disabled}
            multiple={multiple}
            onChange={(e) => {
              onChange(e);
              ReturnFileSizeAndType(e, uploadSize, onError, accept, fileProperties)
            }}
            size={uploadSize}
            onDragOver={() => setIsDragged(true)}
            onDragLeave={() => setIsDragged(false)}
            accept={accept}
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
