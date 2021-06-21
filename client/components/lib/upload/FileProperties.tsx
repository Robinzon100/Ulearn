


interface IFileProperties {
  name?: string;
  size?: number;
  type?: string;
}



const FileProperties = ({ name, size, type }: IFileProperties) => {
  return (
    <>
      <div className="fileProperties">
        <h1 className="f-size-p5 f-weight-r file_size">სახელი: {name}</h1>
        <h1 className="f-size-p5 f-weight-r">ზომა: {size} kb</h1>
        <h1 className="f-size-p5 f-weight-r">ფორმატი: {type} </h1>{" "}
      </div>
    </>
  );
};

export default FileProperties;
