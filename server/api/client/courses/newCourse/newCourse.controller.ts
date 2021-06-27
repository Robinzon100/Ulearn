import { Response, Request, NextFunction } from 'express';
import { uploadtFileToS3 } from '../../../../utils/files/fileUploads.utils';



export const postNewCourse = async (req: Request, res: Response, next: NextFunction) => {

}


export const postNewCourseImage = async (req: Request, res: Response, next: NextFunction) => {
    await uploadtFileToS3(req, res)
}


export const postCurriculumVideos = async (req: Request, res: Response, next: NextFunction) => {
    uploadtFileToS3(req, res)
}
