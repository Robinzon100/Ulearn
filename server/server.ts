import Express, { Application, Request, Response, NextFunction } from 'express'
import { baseMiddlewares } from './middleware/server/base';
import { notFound, errorHandler } from './middleware/server/errorHandlers'
import api from "./api"

const app = Express()


//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config()

// !─── MY MODULES ─────────────────────────────────────────────────────────────────
// const auth = require("./middleware/auth")

//! ─── CONST ──────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000

//! ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)


//!  ─── API ──────────────────────────────────────────────────────────────────────
app.use(api)


app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.info("running http://localhost:" + PORT)
});
