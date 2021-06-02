import { Request, Response, NextFunction } from "express";
import User from "../../../../models/user/user.model";
import customError from '../../../../utils/createError';
import bcrypt from 'bcrypt';
import { getHashedPassword } from '../../../../utils/auth/auth.util';
import { raw } from "objection";



export const postUserLikeCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { liked_course_id } = req.body


        const alreadyLiked = (req.user[0] as User)
            .liked_courses_ids.find((el: number) => el == liked_course_id)

        if (alreadyLiked)
            return customError(res, next, 'already liked', 409)



        const patchedLikedCourses =
            await User
                .query()
                .patch({ liked_courses_ids: raw(`liked_courses_ids || '[${liked_course_id}]'`) })
                .findById(req.user[0].id)

        res.json({
            patchedLikedCourses
        })


    } catch (err) {
        customError(res, next, err.message, 401)
    }
}