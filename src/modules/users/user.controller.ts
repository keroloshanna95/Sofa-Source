// import catchAsync from "../../utils/catchAsync";
import { getUsersService, createUserService } from "./user.service";
import type { APIResponse, ExpressHandler } from "../../utils/apiDTOs";
import { StatusCode, Messages } from "../../utils/apiDTOs";

export const getUsersHandler: ExpressHandler<unknown, APIResponse<any[]>> = async (req, res) => {
    try {
        const users = await getUsersService();
        return res.status(StatusCode.OK).json({
            status: "success",
            data: { users: users },
            message: Messages.SUCCESS,
        });
    } catch (error: Error | any) {
        console.error(error);
        return res.status(StatusCode.ERROR).json({
            status: "error",
            message: Messages.INTERNAL_ERROR,
            error: [{message: error.message}],
        });
    }
};

export const createUserHandler: ExpressHandler<unknown, APIResponse<any[]>> = async (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password) {
        console.log(req.body);
        return res.status(StatusCode.BAD_REQUEST).json({
            status: "error",
            message: Messages.BAD_REQUEST,
            error: [{
                message: "Missing required fields: name, email, and password are required.",
            }],
        });
    }

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    };

    try {
        const user = await createUserService(newUser);
        return res.status(StatusCode.CREATED).json({
            status: "success",
            data: user,
            message: Messages.CREATED,
        });
    } catch (error: Error | any) {
        console.error(error);
        return res.status(StatusCode.ERROR).json({
            status: "error",
            message: Messages.INTERNAL_ERROR,
            error: [error.message],
        });
    }
};
