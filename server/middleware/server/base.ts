import morgan from "morgan";
import express, { Application, Request, Response, NextFunction } from 'express'
import helmet from "helmet"
import cors from 'cors'
const compression = require('compression');





let corsOptions = {
    origin: process.env.FRONT_END_URL,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}




export const baseMiddlewares = (app: Application) => {
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


    app.use(morgan('dev'))
    app.use(compression());
    app.use(helmet())
    app.use(cors(corsOptions))

    app.use((req: Request, res: Response, next: NextFunction) => {
        // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONT_END_URL}`);
        // console.log(process.env.FRONT_END_URL)
        next();
    });
}



