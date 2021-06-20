import { NextFunction, Request, Response } from "express";
import { getFileStream } from "../../../utils/aws/s3/s3.utils";
import customError from '../../../utils/createError';

export const getImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key } = req.params
        if (!key) {
            const readStream = await getFileStream(key)
            readStream.pipe(res)
        }
    } catch (err: any) {
        customError(res, next, err.messagem, 404)
    }
}