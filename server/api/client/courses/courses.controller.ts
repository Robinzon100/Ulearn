import { Response, Request, NextFunction } from 'express';
import Course from '../../../models/course/course.model';
import customError from '../../../utils/createError';



export const getSingleCourses = async (req: Request, res: Response, next: NextFunction) => {
    const {uuid} = req.params
    
    try {
        const course = await Course.query().where('uuid', uuid)

        if (course)
            return res.status(200).json({
                message: 'success',
                course: course
            })

        return customError(res, next, 'no course found', 404)
    } catch (err) {
        customError(res, next, err.message)
    }

}
