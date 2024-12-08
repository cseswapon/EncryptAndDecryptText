"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ende_route_1 = __importDefault(require("../modules/ende/ende.route"));
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: "/ende",
        route: ende_route_1.default,
    },
];
moduleRouters.forEach((route) => router.use(route.path, route.route));
router.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});
exports.default = router;
