import { AWSError, S3 as s_3 } from 'aws-sdk';
import { NextFunction, Request, Response } from "express";
import { cloudDeleteFile, getFileStream } from "../../../utils/aws/s3/s3.utils";
import customError from '../../../utils/createError';

export const getImage = async (req: Request, res: Response, next: NextFunction) => {
    const { key } = req.params
    if (key) {
        const readStream = await getFileStream(key)
        readStream
            .on('error', (err: AWSError) => {
                customError(res, next, err.message, 404)
            })
            .pipe(res)
            .on('data', async (data: s_3.Types.DeleteObjectOutput) => {
                if (data) {
                    await readStream.pipe(res)
                }
            })
    }
}




export const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key } = req.params
        if (key) {
            const deleteRes = await cloudDeleteFile(key)
            res.json({
                deleted: deleteRes != {} && true
            })
        }
    } catch (err: any) {
        customError(res, next, err.messagem, 404)
    }
}