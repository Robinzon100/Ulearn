import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model'
import customError from '../../../../utils/createError';
import User from '../../../../models/user/user.model';
import { decodeAccessToken } from '../../../../middleware/auth/validateToken.middleware';


export const getLandingCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCourses = await Course.query()

        console.log(req.headers.auth_access_token);
        

        let likeCourseIds = null
        // if ((req.headers.auth_access_token as string).length > 0) {
        if (req.headers.auth_access_token && (req.headers.auth_access_token as string).length > 0) {
            const { userUUID } = await decodeAccessToken(req) as { userUUID: string }

            const user =
                await User.query()
                    .where('uuid', userUUID)
                    .select('liked_courses_ids')
                console.log(user);
                
            likeCourseIds = user[0].liked_courses_ids
        }



        if (allCourses.length > 0)
            return res.status(200).json({
                message: 'success',
                courses: allCourses,
                liked_courses_ids: likeCourseIds
            })

        return customError(res, next, 'no courses', 404)
    } catch (err: any) {
        customError(res, next, err.message)
    }
}
