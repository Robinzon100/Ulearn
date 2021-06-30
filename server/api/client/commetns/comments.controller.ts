import { Request, Response, NextFunction } from "express";



//! ─── OWN ────────────────────────────────────────────────────────────────────────
import Comment from "../../../models/course/comments.model";
import customError from '../../../utils/createError';



export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { courseId } = req.params

        const currentCourseComents = await Comment
            .query()
            .where('course_id', courseId)
            .withGraphFetched('user')
            .orderBy('id', 'DESC')


        


        // const numRelatedRows = await Comment
        //     .relatedQuery('users')
        //     .relate(req.user[0].id);

        res.json({
            comments: currentCourseComents
        })
    } catch (err: any) {
        customError(res, next, err.message)
    }
}




export const postComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { courseId } = req.params
        const { rating, text } = req.body


        const alreadyComented = await Comment
            .query()
            .where('user_id', req.user[0].id)


        if (alreadyComented.length != 0) {
            customError(res, next, 'user already rated the course', 403)
            return
        }

        const postedComment = await Comment
            .query()
            .insertAndFetch({
                rating,
                text,
                user_id: req.user[0].id,
                course_id: courseId
            })



        postedComment.user = req.user[0]


        res.json(postedComment)

    } catch (err: any) {
        customError(res, next, err.message)
    }
}