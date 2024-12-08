"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptDecryptController = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const ende_service_1 = require("./ende.service");
class EncryptDecryptController {
    constructor() {
        this.encryptDecryptService = new ende_service_1.EncryptDecryptService();
    }
    encrypt(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = req.body;
                if (!data) {
                    res.status(400).send({ message: "No data provided" });
                    return;
                }
                // console.log(data);
                const encryptedData = yield this.encryptDecryptService.encrypt(data);
                res.status(200).json({ encryptedData });
            }
            catch (err) {
                if (err instanceof AppError_1.default) {
                    res.status(err.statusCode).json({ message: err.message });
                }
                else {
                    res.status(500).json({ message: "Internal Server Error" });
                }
            }
        });
    }
    decrypt(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { encryptedData } = req.body;
                if (!encryptedData) {
                    res.status(400).send({ message: "No encryptedData data provided" });
                    return;
                }
                const decryptedData = yield this.encryptDecryptService.decrypt(encryptedData);
                res.status(200).json({ decryptedData });
            }
            catch (err) {
                if (err instanceof AppError_1.default) {
                    res.status(err.statusCode).json({ message: err.message });
                }
                else {
                    res.status(500).json({ message: "Internal Server Error" });
                }
            }
        });
    }
}
exports.EncryptDecryptController = EncryptDecryptController;
