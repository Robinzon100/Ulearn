const path = require('path');
const { deleteFile } = require('../../utils/deleteFile')
const { sendFileToStorage, deleteFileFromStorage } = require('../../utils/googleCloudStorage');


//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const MainCategories = require("../../models/mainCategories.model");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getAllMainCategories = async (req, res) => {
    try {
        await adminQueries.getFromCollectionAc("mainCategories")
            .then(result => {
                res.json({
                    message: "succsess",
                    mainCategories: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};

exports.getSingleProduct = async (req, res, next) => {
    let { productId } = req.params;

    if (productId) {
        try {
            await adminQueries.getSingleFromCollection("products", productId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        product: result
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
exports.postMainCategories = async (req, res) => {
    const {
        files,
        body: {
            content
        }
    } = req;


    let fileName = files['mainCategories_image'][0].filename
    let imageUrl = await sendFileToStorage('mainCategories', `${fileName}`)



    const mainCategories = new MainCategories(
        content,
        imageUrl
    );

    try {
        await adminQueries.postToCollection("mainCategories", mainCategories)
            .then(result => {
                res.json({
                    message: "succsess",
                    insertedObject: result.ops[0]
                })
                deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/mainCategories/`, fileName))

            });
    } catch (error) {
        res.json({
            message: "something went wrong, object was not inserted in DB",
            insertedObject: result.ops[0]
        })
    }
};


exports.postMainCategoriesDetaleImage = async (req, res) => {
    const {
        files
    } = req;


    let fileName = files['product_image'][0].filename
    let imageUrl = await sendFileToStorage('products', `${fileName}`)

    res.json({
        imageUrl: imageUrl
    })

    deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/products/`, fileName))


}


//! ─── DELETE ───────────────────────────────────────────────────────────────────────
exports.deleteProduct = async (req, res, next) => {
    let { productId } = req.params;

    if (productId) {
        try {
            await adminQueries.deleteWithId("products", productId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedProduct: result
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
exports.updateMainCategories = async (req, res, next) => {
    let { mainCategoriesId } = req.params;
    const { mainCategories } = req.body;

    
    const mainCategoriesObj = new MainCategories(req.body);
    console.log(req.params);

    
    if (mainCategoriesId) {
        try {
            await adminQueries.updateWithId("mainCategories", req.body, `${mainCategoriesId}`)
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