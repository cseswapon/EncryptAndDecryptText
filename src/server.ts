import AppError from "./error/AppError";
import config from "./config";
import app from ".";

(async function () {
  try {
    app.listen(config.PORT, () => {
      console.log(
        `Example app listening on port http://localhost:${config.PORT}`
      );
    });
  } catch (error: any) {
    throw new AppError(404, error.message);
  }
})();
