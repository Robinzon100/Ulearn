const { deleteFile, deleteAllFile } = require('../../utils/deleteFile')
const path = require('path');
const { sendFileToStorage, deleteFileFromStorage } = require('../../utils/googleCloudStorage')



//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const Pdf = require("../../models/pdf.model");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getPdfs = async (req, res) => {
    try {
        await adminQueries.getFromCollection("pdf")
            .then(result => {
                res.json({
                    message: "succsess",
                    pdf: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};

exports.getSinglePdf = async (req, res, next) => {
    let { pdfId } = req.params;

    if (pdfId) {
        try {
            await adminQueries.getSingleFromCollection("pdf", pdfId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        pdf: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};



//! ─── POST ───────────────────────────────────────────────────────────────────────
exports.postPdf = async (req, res) => {
    const {
        files,
        body: {
            title,
            author,
            language,
            isFeatured,
            pdfDate
        }
    } = req;


    // let fileUrl = process.env.UPLOAD_DESTINATION + "/pdf/" + files['pdf_file'][0].filename
    // let thumbnailImageUrl = process.env.UPLOAD_DESTINATION + "/pdf/" + files['pdf_thumbnail'][0].filename


    let thumbnailImageName = files['pdf_thumbnail'][0].filename
    let pdfFileName = files['pdf_file'][0].filename


    let thumbnailImageUrl = await sendFileToStorage('pdf', `${thumbnailImageName}`)
    let fileUrl = await sendFileToStorage("pdf", pdfFileName)



    const pdf = new Pdf(
        title,
        author,
        language,
        isFeatured,
        fileUrl,
        thumbnailImageUrl,
        pdfDate
    );

    try {
        await adminQueries.postToCollection("pdf", pdf)
            .then(result => {
                res.json({
                    message: "succsess",
                    insertedObject: result.ops[0]
                })
                deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/pdf/`, pdfFileName))
                deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/pdf/`, thumbnailImageName))

            });
    } catch (error) {
        res.json({
            message: "something went wrong, object was not inserted in DB",
            insertedObject: result.ops[0]
        })
    }
};




//! ─── DELETE ───────────────────────────────────────────────────────────────────────
exports.deletePdf = async (req, res, next) => {
    let { pdfId } = req.params;


    let { fileUrl, thumbnailImageUrl } = await adminQueries.getSingleFromCollection("pdf", pdfId)



    if (fileUrl || thumbnailImageUrl) {
        let fileUrlName = fileUrl.split("crop2shop_news_images/")[1]
        let thumbnailImageUrlName = thumbnailImageUrl.split("crop2shop_news_images/")[1]
        await deleteFileFromStorage(`${fileUrlName}`)
        await deleteFileFromStorage(`${thumbnailImageUrlName}`)
    }


    if (pdfId) {
        try {
            await adminQueries.deleteWithId("pdf", pdfId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedPdf: result
                    })
                });

            // deleteAllFile(path.join(__dirname, "../../../public/pdf/"))

        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }
};





//! ─── UPDATE ───────────────────────────────────────────────────────────────────────
exports.updatePdf = async (req, res, next) => {
    let { pdfId } = req.params;

    const {
        files,
        body: {
            title,
            author,
            language,
            isFeatured,
            pdfDate
        }
    } = req;


    let fileName = files['pdf_file'][0].filename
    let thumbnailImageName = files['pdf_thumbnail'][0].filename


    let oldObject = await adminQueries.getSingleFromCollection("pdf", pdfId)

    let oldOFileUrl = oldObject.fileUrl.split("https://storage.googleapis.com/crop2shop_news_images/")[1];
    let oldOThumbnailUrl = oldObject.thumbnailImageUrl.split("https://storage.googleapis.com/crop2shop_news_images/")[1];


    deleteFileFromStorage(`${oldOFileUrl}`)
    deleteFileFromStorage(`${oldOThumbnailUrl}`)

    let fileUrl = await sendFileToStorage('pdf', fileName)
    let thumbnailImageUrl = await sendFileToStorage('pdf', thumbnailImageName)

    const pdf = new Pdf(
        title,
        author,
        language,
        isFeatured,
        fileUrl,
        thumbnailImageUrl,
        pdfDate
    );

    if (pdfId) {

        try {
            // deleteAllFile(path.join(__dirname, `../../../public/${process.env.UPLOAD_DESTINATION}/pdf/`))


            // let oldObject = await adminQueries.getSingleFromCollection("pdf", pdfId)

            deleteFile(path.join(__dirname, `../../../public/${process.env.UPLOAD_DESTINATION}/pdf`, fileName))
            deleteFile(path.join(__dirname, `../../../public/${process.env.UPLOAD_DESTINATION}/pdf`, thumbnailImageName))
            // deleteAllFile(path.join(__dirname, "../../../public/pdf"))

            await adminQueries.updateWithId("pdf", pdf, pdfId)
                .then(result => {
                    res.json({
                        message: "succsessfully updated",
                        updatedObject: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};