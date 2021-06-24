


interface IFileProperties {
  name?: any;
  size?: any;
  type?: any;
}



const FileProperties = ({ name, size, type }: IFileProperties) => {
  return (
    <>
      <div className="fileProperties">
        <h1 className="f-size-p5 f-weight-r file_size">სახელი: {name.name}</h1>
        <h1 className="f-size-p5 f-weight-r">ზომა: {size.size} kb</h1>
        <h1 className="f-size-p5 f-weight-r">ფორმატი: {type.type} </h1>{" "}
      </div>
    </>
  );
};

export default FileProperties;
