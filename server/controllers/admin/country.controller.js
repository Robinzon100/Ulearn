const { deleteFile } = require('../../utils/deleteFile')
const path = require('path');



//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const Country = require("../../models/country");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getCountries = async (req, res) => {
    try {
        await adminQueries.getFromCollectionWithSort("countries", {countryTitle: 1})
            .then(result => {
                res.json({
                    message: "succsess", 
                    countries: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};

exports.getSingleCountry = async (req, res, next) => {
    let { countryId } = req.params;

    if (countryId) {
        try {
            await adminQueries.getSingleFromCollection("countries", countryId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        country: result
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
exports.postCountry = async (req, res) => {
    const {
        countryName,
    } = req.body;



    const country = new Country(
        countryName
    );

    try {
        await adminQueries.postToCollection("countries", country)
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
exports.deleteCountry = async (req, res, next) => {
    let { countryId } = req.params;

    if (countryId) {
        try {
            await adminQueries.deleteWithId("countries", countryId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedCountry: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};




 