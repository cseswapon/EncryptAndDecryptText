import express, { Router } from "express";
import { EncryptDecryptController } from "./ende.controller";

const router: Router = express.Router();
const controller = new EncryptDecryptController();

router.post("/encrypt", controller.encrypt.bind(controller));
router.post("/decrypt", controller.decrypt.bind(controller));

export default router;