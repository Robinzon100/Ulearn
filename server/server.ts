import Express, { Request, Response, NextFunction } from 'express'
import morgan from "morgan";
import bodyParser from 'body-parser'
import path from 'path'


const app = Express()


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

app.use(morgan('dev'))

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});



//!  ─── ROUTE IMPORTS ──────────────────────────────────────────────────────────────────────
import clientRoutes  from './routes/client/client.routes';


app.use("/api/client/", clientRoutes)


app.get('/api', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        name: "asdjkf hlaksjdf"
    });
});



app.listen(PORT, () => {
    console.log("running on port " + PORT)
});
