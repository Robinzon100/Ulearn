import { AWSError, S3 as s_3 } from "aws-sdk";
import { NextFunction, Request, Response } from "express";
import { cloudDeleteFile, getFileSize, getFileStream, s3, s3GetParams } from "../../../utils/aws/s3/s3.utils";
import customError from '../../../utils/createError';


export const getVideoStream = async (req: Request, res: Response, next: NextFunction) => {
    const { key } = req.params



    if (key) {
        var params = {
            Bucket: s3GetParams.Bucket,
            Key: key
        } as any;


         s3.headObject(params, async (err: any, data: any) => {
            if (err) {
                console.error(err);
                res.end()
            }


            const size = await getFileSize(key)
            // console.log(req.headers);

            let range = req.headers.range;
            if (!range) {
                return res.sendStatus(416);
            }

            let positions = range.replace(/bytes=/, "").split("-");
            let start = parseInt(positions[0], 10);
            let end = positions[1] ? parseInt(positions[1], 10) : size - 1;
            let chunksize = (end - start) + 1;
            // let chunksize = 10 ** 6;




            res.writeHead(206, {
                "Content-Type": "video/mp4",
                'Content-Length': chunksize,
                "Content-Range": "bytes " + start + "-" + end + "/" + size,
                "Accept-Ranges": "bytes",
                'Last-Modified': data.LastModified,
                'ETag': data.ETag,
            });


            const stream = s3.getObject(params).createReadStream();

            stream.on('error', function error(err: any) {
                console.log('ERROORR ' + err.message);
                res.end()
            });
            stream.on('end', () => {
                console.log('Served by Amazon S3: ' + key);
                res.end()
            });
            stream.pipe(res);
        });

    } else {
        customError(res, next, 'no key provided for the file', 404)
    }
}




export const getVideoFile = async (req: Request, res: Response, next: NextFunction) => {
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



export const deleteVideo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { key } = req.params
        if (key) {
            const deleteRes = await cloudDeleteFile(key)
            res.json({
                deleted: deleteRes == {} && true
            })
        }
    } catch (err: any) {
        customError(res, next, err.messagem, 404)
    }
}