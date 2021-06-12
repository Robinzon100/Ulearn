

export const uploadAndRead = () =>{
    

    
      const preview = document.querySelector('#preview');
      const files   = document.querySelector<HTMLInputElement>('input[type=file]').files;
      
    
      function readAndPreview(file) {
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
          var reader = new FileReader();
    
          reader.addEventListener("load", function () {
            const image = new Image() as HTMLImageElement; 
            image.height = 100;
            image.title = file.name;
            image.src = reader.result as string;
            preview.appendChild( image );
          }, false);
    
          reader.readAsDataURL(file);
        }
    
      }
    
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
    }