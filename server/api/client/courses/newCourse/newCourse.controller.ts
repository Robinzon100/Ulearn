import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model';
import CourseContent from '../../../../models/course/courseContent.model';
import { uploadtFileToS3 } from '../../../../utils/files/fileUploads.utils';
import { v4 } from 'uuid';



export const postNewCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { courseInfo, curriculum } = req.body

    const postedCourse = await Course.query().insert(courseInfo)
    const courseContent = await CourseContent.query().insert({
        uuid: v4(),
        curriculum: curriculum,
        description: courseInfo.detailed_description,
        resource_file_url: courseInfo.resource_file_url
    })

    
}


export const postNewCourseImage = async (req: Request, res: Response, next: NextFunction) => {
    await uploadtFileToS3(req, res)
}


export const postCurriculumVideos = async (req: Request, res: Response, next: NextFunction) => {
    uploadtFileToS3(req, res)
}
