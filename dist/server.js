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
const AppError_1 = __importDefault(require("./error/AppError"));
const config_1 = __importDefault(require("./config"));
const _1 = __importDefault(require("."));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            _1.default.listen(config_1.default.PORT, () => {
                console.log(`Example app listening on port http://localhost:${config_1.default.PORT}`);
            });
        }
        catch (error) {
            throw new AppError_1.default(404, error.message);
        }
    });
})();