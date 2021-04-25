import jwt from 'jsonwebtoken';
import User from '../../models/user/user.model';
import { Request, Response, NextFunction } from 'express';
import customError from '../../utils/createError';




const validateTokenAndGetUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_access_token } = req.headers
        interface IRefreshToken { userUUID: string }

        console.log()

        const { userUUID } = jwt.verify(
            `${auth_access_token}`, process.env.JWT_ACCESS_TOKEN_SECRET!) as IRefreshToken

        const user = await User.query().where('uuid', userUUID)
        req.user = user
        next()
    } catch (err) {
        return customError(res, next, "token not valid", 403)
    }
}



export {
    validateTokenAndGetUser
}