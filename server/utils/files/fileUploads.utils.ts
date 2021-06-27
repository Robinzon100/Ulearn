import { Request, Response } from "express";
import { cloudUploadFile } from '../aws/s3/s3.utils';

import fs from "fs";
import util from "util";
const unlinkFile = util.promisify(fs.unlink)



export const uploadtFileToS3 = async (req: Request, res: Response) => {
    const { file } = req
    const s3Res = await cloudUploadFile(req.file);

    if (s3Res.Key) {
        await unlinkFile(`${file?.path}`)
        return res.json(
            {
                fileKey: s3Res.Key,
            })
    }

}