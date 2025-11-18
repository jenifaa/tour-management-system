// import httpStatus from "http-status-codes";
import express, { Request, Response } from "express";
// import { UserRoutes } from "./app/modules/user/user.route";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser";
const app = express();


app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Management system backend",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
