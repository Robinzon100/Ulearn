

export const uploadAndRead = (setImage) => {
  const preview = document.querySelector("#preview");
  const files = document.querySelector<HTMLInputElement>("input[type=file]").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        const image = new Image() as HTMLImageElement;

        image.title = file.name;
        image.src = reader.result as string;
        setImage((reader.result));

        preview?.appendChild(image);
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
    fileProperties(file.name,Math.floor(file.size / 1000),file.type)


    if (!isFileSizesCorrect(file, uploadSize)) {
      return onError('ფაილის ზომა ზედმეტად დიდია')
    }else {
        onError()
    }

    if (!isTypeCorrect(file, acceptType)) {
      return onError('ფაილის არ შეესაბამება დაშვებულ ფორმატს')
    }else {
        onError()
    }
  })
}


const isFileSizesCorrect = (file: any, size: number): boolean => {
  let isCorrect

  console.log(Math.floor(file.size / 1000))
  console.log(size)
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