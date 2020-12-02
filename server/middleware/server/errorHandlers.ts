import { Request, Response, NextFunction } from "express";

const errorTypes = {
    ValidationError: 422,
    UniqueViolationError: 409,
};

const errorMessages = {
    UniqueViolationError: 'Already exists.',
};

function notFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: error.message,
        // stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
        errors: error.errors || undefined,
    });
}

export {
    notFound,
    errorHandler,
};