import { NextFunction, Response, Request } from 'express';
import customError from '../../utils/createError';
import { newCourseSchema } from '../../schemas/course/newCourse.schema';


export const validateUpdateUserObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await newCourseSchema.validateAsync(req.body);
        next()
    } catch (error: any) {
        customError(res, next, error.message, 400, false)
    }
}