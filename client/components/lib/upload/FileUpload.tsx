import { Upload } from "react-feather";
import { useState, useEffect, ReactNode } from 'react';



interface IFileUpload {
  width?: string,
  height?: string,
  title?: string,
  onChange: any,
  disabled?: boolean,
  icon?: ReactNode,
}




const FileUpload = ({
  width = "100%",
  height = "100%",
  title = 'სურათის ატვირთვა',
  disabled,
  onChange,
  icon }: IFileUpload) => {

  const [isDragged, setIsDragged] = useState(false)





  return (
    <>
      <div className="upload_container drag-and-drop_image">
        <div className="upload_dashed">

          <input
            disabled={disabled}
            type="file"
            id="file-upload"
            onChange={onChange}
            onDragOver={() => setIsDragged(true)}
            onDragLeave={() => setIsDragged(false)} />


          <label htmlFor="file-upload" className="heading f-size-p5 f-weight-b">
            {icon}
            {isDragged ? 'ატვირთვა' : title}
          </label>

        </div>

        {/* <div id="preview"></div> */}
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
