import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model';
import CourseContent from '../../../../models/course/courseContent.model';
import { uploadtFileToS3 } from '../../../../utils/files/fileUploads.utils';
import { v4 } from 'uuid';
import customError from '../../../../utils/createError';



export const postNewCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { courseInfo, curriculum } = req.body

    try {
        // console.log({ courseInfo, curriculum });

        courseInfo.what_will_you_learn = JSON.stringify(courseInfo.what_will_you_learn)
        courseInfo.units_sold = 0

        const courseContent = await CourseContent.query().insertAndFetch({
            curriculum: JSON.stringify(curriculum),
            description: courseInfo.detailed_description,
            resource_file_url: courseInfo.resource_file_url
        })

        courseInfo.course_content_id = courseContent.id
        courseInfo.sub_sub_category_id = 1
        courseInfo.creator_id = req.user[0].id

        const postedCourse = await Course.query().insertAndFetch(courseInfo)


        res.json({ postedCourse, courseContent })
    } catch (err: any) {
        customError(res, next, err.message, 404)
    }
}


export const postNewCourseImage = async (req: Request, res: Response, next: NextFunction) => {
    await uploadtFileToS3(req, res)
}


export const postCurriculumVideos = async (req: Request, res: Response, next: NextFunction) => {
    uploadtFileToS3(req, res)
}
