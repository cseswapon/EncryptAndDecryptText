import * as CryptoJS from "crypto-js";

export class EncryptDecryptService {
  private secretKey = "322237ccb8c8b934c345246cc4a75f338c98d362c07d64491f";
  async encrypt(data: string): Promise<string> {
    try {
      const encryptedData = CryptoJS.AES.encrypt(
        data,
        this.secretKey
      ).toString();
      return encryptedData;
    } catch (error: any) {
      throw new Error("Encryption failed");
    }
  }
  async decrypt(encryptedData: string): Promise<string> {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } catch (error) {
      throw new Error("Decryption failed");
    }
  }
}
