"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = require("./error/ErrorHandler");
const AppError_1 = __importDefault(require("./error/AppError"));
const router_1 = __importDefault(require("./router/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(ErrorHandler_1.ErrorHandler);
app.get("/", (req, res) => {
    try {
        res.status(200).send({
            status: true,
            message: "Server is running",
            serverTime: new Date().toLocaleTimeString(),
        });
    }
    catch (err) {
        throw new AppError_1.default(401, err.message);
    }
});
app.use(router_1.default);
app.get("*", (req, res) => {
    try {
        res
            .status(200)
            .send({ status: true, message: `${req.path} this route not found` });
    }
    catch (err) {
        throw new AppError_1.default(401, err.message);
    }
});
exports.default = app;
