

export const uploadAndRead = (setImage) => {
  const preview = document.querySelector("#preview");
  const files =
    document.querySelector<HTMLInputElement>("input[type=file]").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load",function () {
          const image = new Image() as HTMLImageElement;

          image.title = file.name;
          image.src = reader.result as string;
          setImage(reader.result);

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


export const ReturnFileSize = (e,uploadSize:number,inputError,fileType) => {
    const inputEl = e.target;
    const inputFiles = [...inputEl.files];
    const imgUploadSizeInBytes = uploadSize * 1000;


    if(isFileSizesCorrect(inputFiles,imgUploadSizeInBytes)) {
        console.log(isFileSizesCorrect(inputFiles,imgUploadSizeInBytes));
        
        if(isTypeCorrect(inputFiles,fileType)) {
            console.log(isTypeCorrect(inputFiles,fileType))
            
        }
    }
   
    
}


const isFileSizesCorrect = (files:any[],size:number):boolean => {
    let isCorrect 

    files.map(file => {
        if(file.size > size) {
            isCorrect =  false
        }else {
            isCorrect =  true
        }
    })

    return isCorrect

}

const isTypeCorrect = (files:any[],type:string | string[]):boolean => {
    let isCorrect:boolean
    
    files.map(file => {
        const fileNameArray = file.name.split(".");
        const inputedFileType = fileNameArray[fileNameArray.length - 1];

        if(inputedFileType == type) {
            isCorrect = true
        }else {
            isCorrect = false
        }
    })

    return isCorrect
}