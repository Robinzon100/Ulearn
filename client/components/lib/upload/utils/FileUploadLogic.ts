



export const uploadAndRead = (setImage) =>{
        

    
      const preview = document.querySelector('#preview');
      const files   = document.querySelector<HTMLInputElement>('input[type=file]').files;
      
    
      function readAndPreview(file,e) {
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
          const reader = new FileReader();
    
          reader.addEventListener("load", function () {
            const image = new Image() as HTMLImageElement; 

            image.title = file.name;
            image.src = reader.result as string;
            setImage(reader.result)
            
            preview?.appendChild( image );
          }, false);
    
          reader.readAsDataURL(file);
        }
    
      }
    
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
    }