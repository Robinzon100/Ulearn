import { NextFunction, Response, Request } from 'express';
import customError from '../../utils/createError';
import { updateUserSchema } from '../../schemas/user/schema.user';


export const validateUpdateUserObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await updateUserSchema.validateAsync(req.body);
        next()
    } catch (error) {
        customError(res, next, error.message, 400, false)
    }
}