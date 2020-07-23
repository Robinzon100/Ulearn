const { Storage } = require("@google-cloud/storage")
const path = require("path")
const { deleteFile } = require('./deleteFile')


const storage = new Storage({
    projectId: 'avid-circle-278316',
    keyFilename: `${process.env.GOOGLE_APPLICATION_CREDENTIALS}`
});



exports.sendFileToStorage = async (localFileFolderName, fileName) => {

    try {
        await storage
            .bucket(`${process.env.GOOGLE_CLOUD_BUCKET}`)
            .upload(path.join(__dirname, `../../public${process.env.UPLOAD_DESTINATION}/${localFileFolderName}/${fileName}`), {
                gzip: true,
                metadata: {
                    cacheControl: 'public, max-age=31536000',
                },
            })
        let imageUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${fileName}`
        return imageUrl;


    } catch (err) {
        console.error('ERROR:', err);
    }


}


exports.deleteFileFromStorage = async (fileName) => {
    try {
        await storage.bucket(`${process.env.GOOGLE_CLOUD_BUCKET}`).file(fileName).delete();
    } catch (err) {
        console.error('ERROR:', err);
    }
}



// const storage = new Storage({
  //   projectId: "avid-circle-278316"
  // });

  // try {  
  //   const results = await storage.getBuckets();
  //   // const [buckets] = results;

  //   const bucket = await storage.bucket(`${process.env.BUCKET_NAME}`);
  //   await bucket.upload(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/news/${files['news_image'][0].filename}`), function (err, file) {
  //     if (err) throw new Error(err);
  //   });

  // } catch (err) {
  //   console.error('ERROR:', err);
  // }


  // let imageUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${files['news_image'][0].filename}`

