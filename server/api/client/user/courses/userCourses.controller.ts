import { Request, Response, NextFunction } from "express";
import User from "../../../../models/user/user.model";
import customError from '../../../../utils/createError';
import { raw } from "objection";
import { MainCategories } from '../../../../models/categories/categories.model';



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


    } catch (err: any) {
        customError(res, next, err.message, 401)
    }
}




export const getUserPrefferedCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { favorite_main_category_ids } = req.user[0]

        const mainCategories =
            await MainCategories.query()
                .findByIds(favorite_main_category_ids)

        res.status(200).json({
            user_prefered_categories: mainCategories
        })

    } catch (err: any) {
        customError(res, next, err.message, 401)
    }
}
