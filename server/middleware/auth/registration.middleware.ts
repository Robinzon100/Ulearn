import { regsiterUserSchema } from './../../schemas/auth/schema.registration';
import { Request, Response, NextFunction } from "express";
import customError from '../../utils/createError';


const validateRegistrationObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await regsiterUserSchema.validateAsync(req.body);
        next()
    } catch (error) {
        customError(res, next, error.message, 400, false)
    }
}




export default validateRegistrationObject