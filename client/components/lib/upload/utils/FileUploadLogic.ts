

export const uploadAndRead = (e: React.FormEvent<HTMLInputElement>) => {
  const files = e.currentTarget.files;


  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {

      const reader = new FileReader();

      reader.addEventListener("load", function () {
           const base64 = reader.result as string;
            return base64;

        },
        false
      );
        
      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
};






export const ReturnFileSizeAndType = (e, uploadSize: number, onError, acceptType,fileProperties) => {
  const inputEl = e.target;
  const inputFiles = [...inputEl.files];


  inputFiles.map(file => { 
      
    if (!isFileSizesCorrect(file, uploadSize)) 
        return onError('ფაილის ზომა ზედმეტად დიდია, თქვენი ფაილის ზომაა ' + Math.floor(file.size / 1000) + " kb")
    
    
    if (!isTypeCorrect(file, acceptType)) 
        return onError('ფაილის არ შეესაბამება დაშვებულ ფორმატს')
    
    
    fileProperties(file.name,Math.floor(file.size / 1000),file.type,uploadAndRead(e))
    console.log(uploadAndRead(e))
    return onError();
  })
}


const isFileSizesCorrect = (file: any, size: number): boolean => {
  let isCorrect

  if (Math.floor(file.size / 1000) > size) {

    isCorrect = false
  } else {
    isCorrect = true
  }

  return isCorrect
}


const isTypeCorrect = (file: any, type: string): boolean => {
  let isCorrect: boolean

  const fileNameArray = file.name.split(".");
  const inputedFileType = `.${fileNameArray[fileNameArray.length - 1]}`;
  let condition

  if (type.split(',').length > 1) {
    condition = type.split(',').includes(inputedFileType)
  } else {
    condition = `.${inputedFileType}` == type
  }


  if (condition) {
    isCorrect = true
  } else {
    isCorrect = false
  }

  return isCorrect
}