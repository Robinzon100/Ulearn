import Express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path'
import { baseMiddlewares } from './middleware/server/base';
import { notFound, errorHandler } from './middleware/server/errorHandlers'


const app = Express()


//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config()


// !─── MY MODULES ─────────────────────────────────────────────────────────────────
// const auth = require("./middleware/auth")


//! ─── CONST ──────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000


//! ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)




//!  ─── ROUTE IMPORTS ──────────────────────────────────────────────────────────────────────
app.post('/api', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)

    res.json(req.body);
});


app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log("running http://localhost:" + PORT)
});
