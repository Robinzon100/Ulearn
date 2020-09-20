import Express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import { baseMiddlewares } from './middleware/server/base';



const app = Express()


//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config()


// !─── MY MODULES ─────────────────────────────────────────────────────────────────
const mongoConnect = require('./utils/database').mongoConnect;
// const auth = require("./middleware/auth")


//! ─── CONST ──────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000


//! ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)




//!  ─── ROUTE IMPORTS ──────────────────────────────────────────────────────────────────────
import clientRoutes from './routes/client/client.routes';


app.use("/api/client/", clientRoutes)


app.get('/api', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        name: "asdjkf hlaksjdf"
    });
});



app.listen(PORT, () => {
    console.log("running on port " + PORT)
});
