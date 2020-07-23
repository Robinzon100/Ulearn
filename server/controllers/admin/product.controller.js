const { deleteFile } = require('../../utils/deleteFile')
const path = require('path');



const { sendFileToStorage, deleteFileFromStorage } = require('../../utils/googleCloudStorage');


//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const Product = require("../../models/product.model");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getProducts = async (req, res) => {
    try {
        await adminQueries.getFromCollectionAc("products")
            .then(result => {
                res.json({
                    message: "succsess",
                    products: result
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
exports.postProduct = async (req, res) => {
    const {
        files,
        body: {
            productTitle,
            content,
            categoryId,
            countryId
        }
    } = req;


    let fileName = files['product_image'][0].filename
    let imageUrl = await sendFileToStorage('products', `${fileName}`)



    const product = new Product(
        productTitle,
        imageUrl,
        content,
        categoryId,
        countryId
    );

    try {
        await adminQueries.postToCollection("products", product)
            .then(result => {
                res.json({
                    message: "succsess",
                    insertedObject: result.ops[0]
                })
                deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/products/`, fileName))

            });
    } catch (error) {
        res.json({
            message: "something went wrong, object was not inserted in DB",
            insertedObject: result.ops[0]
        })
    }
};


exports.postProductDetaleImage = async (req, res) => {
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
exports.updateProduct = async (req, res, next) => {
    let { productId } = req.params;
    const {
        files,
        body: {
            productTitle,
            content,
            categoryId,
            countryId
        }
    } = req;



    let { filename } = files['product_image'][0]
    let oldProductObject = await adminQueries.getSingleFromCollection("products", productId)
    // let oldImageUrl = oldProductObject.imageUrl.split("https://storage.googleapis.com/crop2shop_news_images/")[1];


    // deleteFileFromStorage(`${oldImageUrl}`)

    let imageUrl = await sendFileToStorage('products', filename)

    const product = new Product(
        productTitle,
        imageUrl,
        content,
        categoryId,
        countryId
    );

    if (productId) {
        try {

            // let oldObject = await adminQueries.getSingleFromCollection("products", productId)
            // deleteFile(path.join(__dirname, "../../../public/", oldObject.imageUrl))

            await adminQueries.updateWithId("products", product, `${productId}`)
                .then(result => {
                    res.json({
                        message: "succsessfully updated",
                        updatedObject: result
                    })
                    deleteFile(path.join(__dirname, `../../../public${process.env.UPLOAD_DESTINATION}/products/`, filename))


                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }


};