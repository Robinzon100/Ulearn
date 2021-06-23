import { Response, Request, NextFunction } from 'express';
import Course from '../../../../models/course/course.model'
import customError from '../../../../utils/createError';

import fs from "fs";
import util from "util";
import { cloudUploadFile } from '../../../../utils/aws/s3/s3.utils';
const unlinkFile = util.promisify(fs.unlink)



export const postNewCourse = async (req: Request, res: Response, next: NextFunction) => {

}

export const postCurriculumVideos = async (req: Request, res: Response, next: NextFunction) => {
    const { file } = req
    const s3Res = await cloudUploadFile(req.file);
    await unlinkFile(`${file?.path}`)

    res.json(
        {
            fileKey: s3Res.key,
        })
}
