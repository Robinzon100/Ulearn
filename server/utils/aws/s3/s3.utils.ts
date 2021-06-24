import { AWSError, S3 as s_3 } from "aws-sdk"

require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')




const bucketName = process.env.S3_BUCKET_NAME
const region = process.env.S3_BUCKET_REGION
const accessKeyId = process.env.S3_BUCKET_ACCESS_KEY
const secretAccessKey = process.env.S3_BUCKET_SECRET_KEY


export const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})


export const s3GetParams = {
    Bucket: bucketName
}




// uploads a file to s3
export const cloudUploadFile = async (file: any) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return await s3.upload(uploadParams).promise()
}




// delete a file to s3
export const cloudDeleteFile = async (key: any) => {
    const deleteParams = {
        Bucket: bucketName,
        Key: key
    }


    return s3.deleteObject(deleteParams).promise()
}






// downloads a file from s3
export const getFileStream = async (fileKey: any) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return await s3.getObject(downloadParams).createReadStream()
}




// downloads a file from s3
export const getVideoFileStream = async (fileKey: any, { start, end }: any) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return await
        s3.getObject(downloadParams)
            .createReadStream({
                start: start,
                end: end
            })
}



// downloads a file from s3
export const getFile = async (fileKey: any) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return await s3.getObject(downloadParams).promise()
}


// downloads a file from s3
export const getFileSize = async (fileKey: any) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return await s3.headObject(downloadParams)
        .promise()
        .then((res: any) => res.ContentLength);
}



