// import catchAsync from "../../utils/catchAsync";
import { getUsersService, createUserService } from "./user.service";
import type { APIResponse } from "../../utils/apiDTOs";

export const getUsersHandler: (req: Request, res: Response) => Promise<APIResponse<any>> = async (
    req: Request,
    res: Response,
) => {
    try {
        const users = await getUsersService();
        return res.status(200).json({
            status: "success",
            code: 200,
            data: { users: users },
            message: "Users retrieved successfully",
        });
    } catch (error: Error | any) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            code: 500,
            error: [{message: error.message}],
        });
    }
};

export const createUserHandler: (req: Request, res: Response) => Promise<APIResponse<any>> = async (
    req: Request,
    res: Response,
) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        console.log(req.body);
        return res.status(400).json({
            message: "Missing required fields",
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
        return res.status(201).json({
            status: "success",
            code: 201,
            data: user,
            message: "User created successfully",
        });
    } catch (error: Error | any) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            code: 500,
            error: [error.message],
        });
    }
};
