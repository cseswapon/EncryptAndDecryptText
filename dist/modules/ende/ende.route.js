"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ende_controller_1 = require("./ende.controller");
const router = express_1.default.Router();
const controller = new ende_controller_1.EncryptDecryptController();
router.post("/encrypt", controller.encrypt.bind(controller));
router.post("/decrypt", controller.decrypt.bind(controller));
exports.default = router;
