import jwt from 'jsonwebtoken';
import User from '../../models/user/user.model';
import { Request, Response, NextFunction } from 'express';
import customError from '../../utils/createError';



const decodeAccessToken = async (req: Request) => {
    const { auth_access_token } = req.headers
    const decoded = await jwt.verify(
        `${auth_access_token}`,
        process.env.JWT_ACCESS_TOKEN_SECRET!)

    return decoded
}



const getUserWithAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userUUID } = await decodeAccessToken(req) as { userUUID: string }
        const user= await User.query().where('uuid', userUUID)
        req.user = user
        next()
    } catch (err) {
        return customError(res, next, "token not valid", 403)
    }
}



const validateAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decoded = await decodeAccessToken(req)
        if (decoded) {
            next()
        } else {
            return customError(res, next, "token not valid", 403)
        }
    } catch (err) {
        return customError(res, next, "token not valid", 403)
    }
}





export {
    getUserWithAccessToken,
    decodeAccessToken,
    validateAccessToken
}