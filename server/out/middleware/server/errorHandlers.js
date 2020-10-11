"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
var errorTypes = {
    ValidationError: 422,
    UniqueViolationError: 409,
};
var errorMessages = {
    UniqueViolationError: 'Already exists.',
};
function notFound(req, res, next) {
    var error = new Error("Not found - " + req.originalUrl);
    res.status(404);
    next(error);
}
exports.notFound = notFound;
// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
        errors: error.errors || undefined,
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandlers.js.map