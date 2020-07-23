const { deleteFile } = require('../../utils/deleteFile')
const path = require('path');



//! ─── MODELS ─────────────────────────────────────────────────────────────────────
const Test = require("../../models/test.model");

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const adminQueries = require("../../querys/admin.queries");


//! ─── GET ───────────────────────────────────────────────────────────────────────
exports.getTests = async (req, res) => {
    try {
        await adminQueries.getFromCollection("tests")
            .then(result => {
                res.json({
                    message: "succsess", 
                    test: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};


exports.getSingleTest = async (req, res, next) => {
    let { testId } = req.params;

    if (testId) {
        try {
            await adminQueries.getSingleFromCollection("tests", testId)
                .then(result => {
                    res.json({
                        message: "succsess",
                        test: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};


//? test emails
exports.getTestEmail = async (req, res) => {
    try {
        await adminQueries.getFromCollection("emails")
            .then(result => {
                res.json({
                    message: "succsess", 
                    emails: result
                })
            });
    } catch (error) {
        console.log(error)
    }
};




//! ─── POST ───────────────────────────────────────────────────────────────────────
exports.postTest = async (req, res) => {
    const {
        text,
        subQuestions,
        answers,
    } = req.body;



    const test = new Test(
        text,
        subQuestions,
        answers
    );

    try {
        await adminQueries.postToCollection("tests", test)
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
exports.deleteTest = async (req, res, next) => {
    let { testId } = req.params;

    if (testId) {
        try {
            await adminQueries.deleteWithId("tests", testId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedTest: result
                    })
                });
        } catch (error) {
            console.log(error)
        }
    } else {
        return next()
    }

};



exports.deleteTestEmail = async (req, res, next) => {
    let { emailId } = req.params;

    if (emailId) {
        try {
            await adminQueries.deleteWithId("emails", emailId)
                .then(result => {
                    res.json({
                        message: "succsessfully deleted",
                        deletedEmail: result
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
exports.updateTest = async (req, res, next) => {
    let { testId } = req.params;
    const {
        text,
        subQuestions,
        answers,
    } = req.body;



    const test = new Test(
        text,
        subQuestions,
        answers
    );


    if (testId) {
        try {
            await adminQueries.updateWithId("tests", test, testId)
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