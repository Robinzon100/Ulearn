require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')


const bucketName = process.env.S3_BUCKET_NAME
const region = process.env.S3_BUCKET_REGION
const accessKeyId = process.env.S3_BUCKET_ACCESS_KEY
const secretAccessKey = process.env.S3_BUCKET_SECRET_KEY


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})





// uploads a file to s3
const uploadFile = async (file: any) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return await s3.upload(uploadParams).promise()
}





// downloads a file from s3
const getFileStream = async (fileKey: any) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return await s3.getObject(downloadParams).createReadStream()
}





module.exports = {
    uploadFile,
    getFileStream
}