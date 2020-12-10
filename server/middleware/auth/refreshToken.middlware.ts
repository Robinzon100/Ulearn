import { refreshTokenSchema } from './../../schemas/auth/schema.refreshToken';
import { Request, Response, NextFunction } from "express";
import customError from '../../utils/createError';

const validateRefreshTokenObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await refreshTokenSchema.validateAsync(req.body);
        next()
    } catch (error) {
        customError(res, next, error.message, 400, false)
    }
}



export default validateRefreshTokenObject