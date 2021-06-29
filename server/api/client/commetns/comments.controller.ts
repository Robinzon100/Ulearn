import { Request, Response, NextFunction } from "express";



//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { MainCategories, SubCategories, SubSubCategories } from '../../../models/categories/categories.model';
import Comment from "../../../models/course/comments.model";
import customError from '../../../utils/createError';
import User from '../../../models/user/user.model';



export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { courseId } = req.params

        const currentCourseComents = await Comment
            .query()
            .where('course_id', courseId)

        const numRelatedRows = await Comment
            .relatedQuery('users')
            .relate(req.user[0].id);

        res.json(numRelatedRows)


        // res.status(200).json({
        //     categories: {
        //         main_categories,
        //         sub_categories,
        //         sub_sub_categories
        //     }
        // })
    } catch (err: any) {
        customError(res, next, err.message)
    }
}




export const postComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { courseId } = req.params
        const { rating, text } = req.body
        const postedComment = await Comment
            .query()
            .insertAndFetch({
                rating,
                text,
                user_id: req.user[0].id,
                course_id: courseId
            })

        res.json(postedComment)

    } catch (err: any) {
        customError(res, next, err.message)
    }
}