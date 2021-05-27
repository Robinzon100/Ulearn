import { Request, Response, NextFunction } from "express";
import User from "../../../../models/user/user.model";
import customError from '../../../../utils/createError';



export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        user: req.user
    })
}



export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { udatedUser: {
        email,
        full_name,
        password,
        recovery_email,
        description,
        imageUrl,
        payment_info,
    } } = req.body
    console.log(updateUser);
    
    const updatedUser = await User.query().patch()
}