import { loginUserSchema } from './../../schemas/auth/schema.login';
import { Request, Response, NextFunction } from "express";
import customError from '../../utils/createError';

const validateloginObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginUserSchema.validateAsync(req.body);
        next()
    } catch (error) {
        customError(res, next, error.message, 400, false)
    }
}



export default validateloginObject