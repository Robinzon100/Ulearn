const { deleteFile } = require('../../utils/deleteFile')
const path = require('path');



//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const Category = require("../../models/category");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getCategories = async (req, res) => {
    try {
        await adminQueries.getFromCollectionWithSort("categories", {categoryTitle: 1})
            .then(result => {
                res.json({
                    message: "succsess", 
                    categories: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};

exports.getSingleCategory = async (req, res, next) => {
    let { categoryId } = req.params;

    if (categoryId) {
        try {
            await adminQueries.getSingleFromCollection("categories", categoryId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        category: result
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
exports.postCategory = async (req, res) => {
    const {
        categoryName,
    } = req.body;



    const category = new Category(
        categoryName
    );

    try {
        await adminQueries.postToCollection("categories", category)
            .then(result => {
                res.json({
                    message: "succsess",
                    insertedObject: result.ops[0]
                })
            });
    } catch (error) {
        res.json({
            message: "something went wrong, object was not inserted in DB",
            insertedObject: result.ops[0]
        })
    }
};




//! ─── DELETE ───────────────────────────────────────────────────────────────────────
exports.deleteCategory = async (req, res, next) => {
    let { categoryId } = req.params;

    if (categoryId) {
        try {
            await adminQueries.deleteWithId("categories", categoryId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedCategory: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};




 