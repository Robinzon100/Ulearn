import { Upload } from "react-feather";



interface IFileUpload {
    width?:string,
    height?:string
    onChange:any;
    disabled?:boolean;
    uploadIconSize?:string | number
}




const FileUpload = ({width="100%",height="100%",disabled,onChange,uploadIconSize}:IFileUpload) => {
  return (
      <>
    <div className="upload_container drag-and-drop_image">
      <div className="upload_dashed">

        <input  disabled={disabled} type="file" id="file-upload" onChange={onChange} />


        <label htmlFor="file-upload" className="heading f-size-p5 f-weight-b">
          <Upload size={uploadIconSize} stroke="var(--secondary-darker-grey)" />
          სურათის ატვირთვა
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
        `}
    </style>
    </>
  );
};

export default FileUpload;
