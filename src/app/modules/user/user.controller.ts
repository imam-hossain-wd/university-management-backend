import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import httpStatus from "http-status";


const createStudent: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const {...userData } = req.body;
      const result = await userService.createUser(userData);
  
      sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully!',
        data: result,
      });
    }
  );