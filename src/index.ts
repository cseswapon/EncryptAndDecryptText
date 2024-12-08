import express,{ Application,Request,Response } from "express"
import { ErrorHandler } from "./error/ErrorHandler"
import AppError from "./error/AppError";
import router from "./router/router";

const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(ErrorHandler)

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send({
      status: true,
      message: "Server is running",
      serverTime: new Date().toLocaleTimeString(),
    });
  } catch (err: any) {
    throw new AppError(401, err.message);
  }
});

app.use(router)

app.get("*", (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .send({ status: true, message: `${req.path} this route not found` });
  } catch (err: any) {
    throw new AppError(401, err.message);
  }
});

export default app;