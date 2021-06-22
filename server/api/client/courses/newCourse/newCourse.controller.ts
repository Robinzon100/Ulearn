import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model'
import customError from '../../../../utils/createError';


export const postNewCourse = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const postCurriculumVideos = async (req: Request, res: Response, next: NextFunction) => {
    res.json(
        req.files
    )
}
