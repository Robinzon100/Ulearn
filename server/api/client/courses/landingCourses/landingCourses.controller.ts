import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model'
import customError from '../../../../utils/createError';


export const getLandingCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCourses = await Course.query()

        if (allCourses.length > 0) 
            return res.status(200).json({
                message: 'success',
                courses: allCourses
            })
        
        return customError(res, next, 'no courses', 404)
    } catch (err) {
        customError(res, next, err.message)
    }
}
