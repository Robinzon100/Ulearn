const { promisify } = require("util");
const path = require('path');
const { Storage } = require("@google-cloud/storage")




//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const { deleteFile } = require('../../utils/deleteFile')
const { sendFileToStorage, deleteFileFromStorage } = require('../../utils/googleCloudStorage')


//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const News = require("../../models/news.model");


//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── POST ───────────────────────────────────────────────────────────────────────
exports.postNews = async (req, res) => {
  const {
    files,
    body: {
      title,
      description,
      isFeatured,
      link,
      newsDate,
    }
  } = req;



  let fileName = files['news_image'][0].filename
  let imageUrl = await sendFileToStorage('news', `${fileName}`)

  // console.log(imageUrl)

  const news = new News(
    title,
    description,
    isFeatured,
    link,
    imageUrl,
    newsDate
  );


  try {
    await adminQueries.postToCollection("news", news)
      .then(result => {
        res.json({
          message: "succsess",
          insertedObject: result.ops[0]
        })
        deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/news/`, fileName))

      });
  } catch (error) {
    res.json({
      message: "something went wrong, object was not inserted in DB",
      insertedObject: result.ops[0]
    })
  }



};

//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getNews = async (req, res) => {

  try {
    await adminQueries.getFromCollection("news")
      .then(result => {
        res.json({
          message: "succsess",
          news: result
        })
      });
  } catch (error) {
    console.log(error)
  }
};

exports.getSingleNews = async (req, res, next) => {
  let { newsId } = req.params;

  if (newsId) {
    try {
      await adminQueries.getSingleFromCollection("news", newsId)
        .then(result => {
          res.json({
            message: "succsess",
            news: result
          })
        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }

};



//! ─── DELETE ───────────────────────────────────────────────────────────────────────
exports.deleteNews = async (req, res, next) => {
  let { newsId } = req.params;
  let { imageUrl } = await adminQueries.getSingleFromCollection("news", newsId)

  if (imageUrl) {
    let imageName = imageUrl.split("crop2shop_news_images/")[1]
    await deleteFileFromStorage(`${imageName}`)
  }


  if (newsId) {
    try {
      await adminQueries.deleteWithId("news", newsId)
        .then(result => {
          res.json({
            message: "succsessfully deleted",
            deletedNews: result
          })
        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }
};

//! ─── UPDATE ───────────────────────────────────────────────────────────────────────
exports.updateNews = async (req, res, next) => {
  let { newsId } = req.params;

  const {
    files,
    body: {
      title,
      description,
      isFeatured,
      link,
      newsDate,
    }
  } = req;

  let { filename } = files['news_image'][0]
  let oldNewsObject = await adminQueries.getSingleFromCollection("news", newsId)
  // if (oldNewsObject) {

  // }
  let oldImageUrl = oldNewsObject.imageUrl.split("https://storage.googleapis.com/crop2shop_news_images/")[1];

  deleteFileFromStorage(`${oldImageUrl}`)

  let imageUrl = await sendFileToStorage('news', filename)

  const news = new News(
    title,
    description,
    isFeatured,
    link,
    imageUrl,
    newsDate
  );

  if (newsId) {
    try {

      let oldObject = await adminQueries.getSingleFromCollection("news", newsId)

      await adminQueries.updateWithId("news", news, newsId)
        .then(result => {
          res.json({
            message: "succsessfully updated",
            updatedObject: result
          })
          deleteFile(path.join(__dirname, `../../../public/${process.env.UPLOAD_DESTINATION}/news`, filename))

        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }



};




