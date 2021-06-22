const readAndPreview = async (file, result) => {
  let base64
  if (/\.(jpe?g|png|gif)$/i.test(file?.name)) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      base64 = reader?.result as string;

      return result(base64)

    }, false);
    reader.readAsDataURL(file);
  }else {
      return result(false)
  }
}




export const uploadAndRead = async (e: React.FormEvent<HTMLInputElement>) => {
  return new Promise((resolve, reject) => {
    const file = e.currentTarget.files[0];
    readAndPreview(file, (result) => {
        if(result) {
            resolve(result)
        }else {
            reject(result)
        }
    })
  })
};






export const ReturnFileSizeAndType = async (e, uploadSize: number, onError, acceptType, fileProperties) => {
  const inputEl = e.target;
  const inputFiles = [...inputEl.files];


  inputFiles.map(async (file) => {
    const fileSize = Math.floor(file?.size / 1000)

    if (!isFileSizesCorrect(file, uploadSize))
      return onError('ფაილის ზომა ზედმეტად დიდია, თქვენი ფაილის ზომაა ' + Math.floor(file?.size / 1000) + " kb")

    if (!isTypeCorrect(file, acceptType))
      return onError('ფაილი არ შეესაბამება დაშვებულ ფორმატს')
      
    let imageBase64;

    try {
        imageBase64 = await uploadAndRead(e)
        fileProperties(file?.name, fileSize, file?.type, imageBase64 && imageBase64)
    } catch (error) {
        fileProperties(file?.name, fileSize, file?.type)
    }
    
    return onError();
  })
}








const isFileSizesCorrect = (file: any, size: number): boolean => {
  let isCorrect

  if (Math.floor(file?.size / 1000) > size) {
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
    condition = `${inputedFileType}` == `${type}`
  }


  if (condition) {
    isCorrect = true
  } else {
    isCorrect = false
  }

  return isCorrect
}