import { Response, NextFunction } from 'express';

const customError = async (res: Response, next: NextFunction, errorMessage: string, statusCode: number = 500, passWithNext = true) => {
    if (passWithNext) {
        res.status(statusCode);
        const errror = new Error(errorMessage);
        next(errror);

    } else {
        res.status(statusCode).json({
            error: errorMessage
        })
    }
}


export default customError;