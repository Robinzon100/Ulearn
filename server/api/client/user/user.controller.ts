import { Request, Response, NextFunction } from "express";
import User from "../../../models/user/user.model";
import customError from "../../../utils/createError";




export const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User
            .query()
            .findById(
                req.params.userId
            )
        res.json({
            user
        })
    } catch (err: any) {
        customError(res, next, err.message, 500)
    }
}



