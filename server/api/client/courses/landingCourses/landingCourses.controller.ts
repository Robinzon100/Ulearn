import { Response, Request, NextFunction } from 'express';


export const getLandingCourses = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'aaaaaaaaaaaa'
    })
}


export const getSingleLandingCourses = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'all courses'
    })
}
