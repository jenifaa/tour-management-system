/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status-codes";

import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
// import { UserServices } from "../user/user.service";
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
const credentialsLogic = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const result = await UserServices.getAllUsers();

    const loginInfo = await AuthServices.credentialsLogic(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Login Successfully",
      data: loginInfo,
    });
  }
);
export const AuthControllers = {
  credentialsLogic,
};
