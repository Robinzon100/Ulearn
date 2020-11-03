import Express, { Application, Request, Response, NextFunction } from 'express'
import { baseMiddlewares } from './middleware/server/base';
import { notFound, errorHandler } from './middleware/server/errorHandlers'
import { Model } from 'objection';
import api from "./api"

const app = Express()

// TODO: use compressor middlware https://www.npmjs.com/package/compression


import connection from "./api/db";
Model.knex(connection);


//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config()

// !─── MY MODULES ─────────────────────────────────────────────────────────────────
// const auth = require("./middleware/auth")

//! ─── CONST ──────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000

//! ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)


//!  ─── API ──────────────────────────────────────────────────────────────────────
app.use('/api',api)


app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.info("running http://localhost:" + PORT)
});
