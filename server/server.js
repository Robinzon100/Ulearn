const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')

//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config()


// !─── MY MODULES ─────────────────────────────────────────────────────────────────
const mongoConnect = require('./utils/database').mongoConnect;
// const auth = require("./middleware/auth")


//! ─── CONST ──────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000


//! ─── APP USE ──────────────────────────────────────────────────────────────────────
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



//!  ─── ROUTE IMPORTS ──────────────────────────────────────────────────────────────────────
const adminRoutes = require("./routes/admin/admin.routes")
const clientRoutes = require("./routes/client/client.routes")

app.get('/api', (req, res) => {
    res.json({
        name: "asdjkf hlaksjdf"
    });
});



mongoConnect(() => {
    app.listen(PORT, () => {
        console.log("running on port " + PORT)
    });
})
