const MongoClient = require("mongodb").MongoClient;

// 
// ─── MY IMPORTS ─────────────────────────────────────────────────────────────────
// 
let _db;

const mongoConnect = cb => {
    MongoClient.connect(
        process.env.MONGODB_URI,
        { useUnifiedTopology: true })
        .then(client => {
            _db = client.db();
            cb(client);
        })
        .catch(err => console.log(err));
};


const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "no database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




