"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const ErrorHandler = (err, req, res, next) => {
    const statusCode = err.isOperational ? err.statusCode : 500;
    const message = err.isOperational ? err.message : "Internal Server Error";
    res.status(statusCode).json({
        status: "Error",
        statusCode,
        message,
    });
    next();
};
exports.ErrorHandler = ErrorHandler;
