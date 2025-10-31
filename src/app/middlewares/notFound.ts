import httpStatus  from 'http-status-codes';
import { Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (res: Response, req: Request) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route Not Found",
  });
};
export default notFound