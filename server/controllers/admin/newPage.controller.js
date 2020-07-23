const { deleteFile } = require('../../utils/deleteFile')
const path = require('path');



const { sendFileToStorage, deleteFileFromStorage } = require('../../utils/googleCloudStorage');


//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const NewPage = require("../../models/newPage.model");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────

exports.getNewPages = async (req, res) => {

    try {
      await adminQueries.getFromCollection("newPages")
        .then(result => {
          res.json({
            message: "succsess",
            newPages: result
          })
        });
    } catch (error) {
      console.log(error)
    }
  };






exports.getSingleNewPage = async (req, res, next) => {
    let { newPageId } = req.params;

    if (newPageId) {
        try {
            await adminQueries.getSingleFromCollection("newPages", newPageId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        newPage: result
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
exports.postNewPage = async (req, res) => {
    const {
        files,
        body: {
            title,
            menuTitle,
            content,
        }
    } = req;


    let fileName = files['pageImage'][0].filename
    let imageUrl = await sendFileToStorage('newPages', `${fileName}`)



    const newPage = new NewPage(
        title,
        menuTitle,
        content,
        imageUrl
    );

    try {
        await adminQueries.postToCollection("newPages", newPage)
            .then(result => {
                res.json({
                    message: "succsess",
                    insertedObject: result.ops[0]
                })
                deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/newPages/`, fileName))

            });
    } catch (error) {
        res.json({
            message: "something went wrong, object was not inserted in DB",
            insertedObject: result.ops[0]
        })
    }
};

 

//! ─── DELETE ───────────────────────────────────────────────────────────────────────
exports.deleteNewPage = async (req, res, next) => {
    let { newPageId } = req.params;

    if (newPageId) {
        try {
            await adminQueries.deleteWithId("newPages", newPageId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedNewPage: result
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
exports.updateNewPage = async (req, res, next) => {
    let { newPageId } = req.params;
     const {
        files,
        body: {
            title,
            menuTitle,
            content,
        }
    } = req;




    let { filename } = files['pageImage'][0]
    let oldProductObject = await adminQueries.getSingleFromCollection("newPages", newPageId)
    let imageUrl = await sendFileToStorage('newPages', filename)
 

    const newPage = new NewPage(
        title,
        menuTitle,
        content,
        imageUrl
    );

    if (newPageId) {
        try {

            // let oldObject = await adminQueries.getSingleFromCollection("products", productId)
            // deleteFile(path.join(__dirname, "../../../public/", oldObject.imageUrl))

            await adminQueries.updateWithId("newPages", newPage, `${newPageId}`)
                .then(result => {
                    res.json({
                        message: "succsessfully updated",
                        updatedObject: newPage
                    })
                    deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/newPages/`, filename))


                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }


};