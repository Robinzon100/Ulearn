const multer = require("multer");
const path = require("path")
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);
const fs = require('fs');

//!─── OPTIONS VALUES ───────────────────────────────────────────────────────────────
const maxSize = process.env.ALLOWED_IMAGE_FILE_SIZES;



//! ─── PATH AND FILE NAME ─────────────────────────────────────────────────────────
const imageStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const dir = path.join(__dirname, `../../public/${process.env.UPLOAD_DESTINATION}/news`);
    cb(null, dir);
  },
  filename: async (req, file, cb) => {
    cb(null, "(" + new Date().getTime() + ")--" + file.originalname.replace(/\s/g, ""));
  }
});


const newPageImageStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const dir = path.join(__dirname, `../../public/${process.env.UPLOAD_DESTINATION}/newPages`);
    cb(null, dir);
  },
  filename: async (req, file, cb) => {
    cb(null, "(" + new Date().getTime() + ")--" + file.originalname.replace(/\s/g, ""));
  }
});


const productImageStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const dir = path.join(__dirname, `../../public/${process.env.UPLOAD_DESTINATION}/products`);
    cb(null, dir);
  },
  filename: async (req, file, cb) => {
    cb(null, "product_image-(" + new Date().getTime() + ")--" + file.originalname.replace(/\s/g, ""));
  }
});


const pdfStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const dir = path.join(__dirname, `../../public/${process.env.UPLOAD_DESTINATION}/pdf`);
    cb(null, dir);
  },
  filename: async (req, file, cb) => {
    cb(null, "(" + new Date().getTime() + ")--" + file.originalname.replace(/\s/g, ""));
  }
});



//! ─── OPTIONS ────────────────────────────────────────────────────────────────────
const imageOptions = {
  storage: imageStorage,
  limits: { fileSize: maxSize }, 
  fileFilter: (req, file, cb) => {
    sanitizeFile(req, file, cb, "image");
  }
}

const newPageOptions = {
  storage: newPageImageStorage,
  limits: { fileSize: maxSize }, 
  fileFilter: (req, file, cb) => {
    sanitizeFile(req, file, cb, "image");
  }
}


const productImageOption = {
  storage: productImageStorage,
  limits: { fileSize: maxSize }, 
  fileFilter: (req, file, cb) => {
    sanitizeFile(req, file, cb, "image");
  }
}

const pdfOptions = {
  storage: pdfStorage,
  limits: { fileSize: maxSize }, 
  // fileFilter: (req, file, cb) => {
  //   sanitizeFile(req, file, cb, "pdf");
  //   sanitizeFile(req, file, cb, "image");
  // }
}


//! ─── MIDDLEWARES ────────────────────────────────────────────────────────────────
exports.uploadNewsImage = multer(imageOptions).fields([
  { name: "news_image", maxCount: 1 }
]);


exports.uploadNewpageImage = multer(newPageOptions).fields([
  { name: "pageImage", maxCount: 1 }
]);


exports.uploadProductImage = multer(productImageOption).fields([
  { name: "product_image", maxCount: 1 }
]);


exports.uploadPdfFile = multer(pdfOptions).fields([
  { name: "pdf_file", maxCount: 1 },
  { name: "pdf_thumbnail", maxCount: 1 },
]);




  
//! ─── UTILS FUNCTIONS ────────────────────────────────────────────────────────────
const sanitizeFile = (req, file, cb, filetype) => {
  let fileExts
  let isAllowedMimeType

  switch (filetype) {
    case "image":
      fileExts = ['png', 'jpg', 'jpeg']
      isAllowedMimeType = file.mimetype.startsWith(`image/`)

      break;
    case "pdf":
      fileExts = ['pdf']
      isAllowedMimeType = file.mimetype.endsWith(`/pdf`)
      break;
  }

  let isAllowedExt = fileExts.includes(file.originalname.split('.')[1].toLowerCase());
  console.log(file.mimetype)
  
  if (isAllowedExt && isAllowedMimeType) {
    return cb(null, true)
  }
  else {
    cb(null, console.log("unsuported format of the file"))
  }
}

