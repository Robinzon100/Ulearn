import { Response, Request, NextFunction } from 'express';
import Course from '../../../models/course/course.model';
import customError from '../../../utils/createError';
import CourseContent from '../../../models/course/courseContent.model';
import { raw } from 'objection';



export const getSingleCourses = async (req: Request, res: Response, next: NextFunction) => {
    const { uuid } = req.params

    try {
        const course = await Course.query().where('uuid', uuid)
        const courseContent = await CourseContent.query().findById(course[0].course_content_id)
        course[0].course_content = courseContent

        if (course)
            return res.status(200).json({
                message: 'success',
                course: course[0]
            })

        return customError(res, next, 'no course found', 404)
    } catch (err: any) {
        customError(res, next, err.message)
    }
}





export const getFilteredCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params } = req
        const { body } = req

        Object.keys(params).forEach(key => {
            if (params[key] === undefined) {
                delete params[key];
            }
        });


        const course = await Course.query().where({ ...body, ...params })

        if (course)
            return res.status(200).json({
                message: 'success',
                courses: course
            })

        return customError(res, next, 'no course found', 404)
    } catch (err: any) {
        customError(res, next, err.message)
    }
}



export const getSearchedCourses = async (req: Request, res: Response, next: NextFunction) => {
    const { searchQuery } = req.params
    const parsedSearchQuery = searchQuery.replace(/\s/g, ' | ')


    try {
        const searchedCourses = await Course
            .query()
            .select('*')
            .whereRaw(`to_tsvector(title || '' || description) @@ to_tsquery('${parsedSearchQuery}')`)



        res.json({
            searchedCourses: searchedCourses
        });
    } catch (err: any) {
        customError(res, next, err.message, 400)
    }
}
