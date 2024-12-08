import { Request, Response } from "express";
import AppError from "../../error/AppError";
import { EncryptDecryptService } from "./ende.service";

export class EncryptDecryptController {
  private encryptDecryptService: EncryptDecryptService;

  constructor() {
    this.encryptDecryptService = new EncryptDecryptService();
  }

  async encrypt(req: Request, res: Response): Promise<void> {
    try {
      const { data } = req.body;
      if (!data) {
        res.status(400).send({ message: "No data provided" });
        return;
      }
        // console.log(data);
      const encryptedData = await this.encryptDecryptService.encrypt(data);
      res.status(200).json({ encryptedData });
    } catch (err: any) {
      if (err instanceof AppError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  async decrypt(req: Request, res: Response): Promise<void> {
    try {
      const { encryptedData } = req.body;
      if (!encryptedData) {
        res.status(400).send({ message: "No encryptedData data provided" });
        return;
      }
      const decryptedData = await this.encryptDecryptService.decrypt(
        encryptedData
      );
      res.status(200).json({ decryptedData });
    } catch (err: any) {
      if (err instanceof AppError) {
        res.status(err.statusCode).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
