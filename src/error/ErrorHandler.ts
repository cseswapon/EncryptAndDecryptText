import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";

export const ErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.isOperational ? err.statusCode : 500;
  const message = err.isOperational ? err.message : "Internal Server Error";

  res.status(statusCode).json({
    status: "Error",
    statusCode,
    message,
  });

  next();
};
