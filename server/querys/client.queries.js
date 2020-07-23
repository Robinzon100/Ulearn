const getDb = require("../utils/database").getDb;
const mongodb = require('mongodb')



//
//! ─── GET ─────────────────────────────────────────────────────────────────────
//

exports.getFromCollection = async (collection) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .sort({ _id: -1 })
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }
}

exports.getFromCollectionSorted = async (collection, sortConditions) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .sort(sortConditions)
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }
}

exports.getFromCollectionAc = async (collection) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .sort({ _id: 1 })
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }
}

exports.getFeaturedFromCollection = async (collection) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find({
                isFeatured: "true",
            })
            .sort({ _id: -1 })
            .limit(4)
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}


exports.getSingleFromCollection = async (collection, id) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .findOne({
                _id: new mongodb.ObjectID(id)
            })
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}


exports.getSingleFromCollectionWhere = async (collection, queryObj) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .findOne(queryObj)
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}




exports.getFromCollectionWithSpecificFields = async (collection, fieldsObj) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .project(fieldsObj)
            .sort()
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }
}




exports.getFromCollectionWithSort = async (collection, sortObj) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .sort(sortObj)
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }
}



//
//! ─── POST ─────────────────────────────────────────────────────────────────────
//
exports.postToCollection = async (collection, object) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .insertOne(object)
            .then(result => {
                return result;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}




