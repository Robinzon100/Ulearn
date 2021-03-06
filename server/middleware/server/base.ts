import morgan from "morgan";
import express, { Application, Request, Response, NextFunction } from 'express'
import helmet from "helmet"
import cors from 'cors'
import cookieParser from 'cookie-parser'
const compression = require('compression');





let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'auth_access_token', 'auth_refresh_token', 'auth_token_expiration'],
    exposedHeaders: ['auth-access_token', 'auth-refresh_token', 'auth-token_expiration']
}




export const baseMiddlewares = (app: Application) => {
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


    app.use(morgan('dev'))
    app.use(compression());
    app.use(helmet())
    app.use(cors(corsOptions))
    app.use(cookieParser())

    app.use((req: Request, res: Response, next: NextFunction) => {
        // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONT_END_URL}`);
        next();
    });
}



