import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";


import { getHashedPassword, createAccessToken } from './../../../utils/auth/auth.util';
import User from '../../../models/user/user.model';
import customError from '../../../utils/createError';
import { regsiterUserSchemaWithEncryptedPassword } from '../../../schemas/auth/schema.registration';
import { createRefreshToken, createTokenExpirationHeader } from '../../../utils/auth/auth.util';
import { Token } from 'typescript';




//! ─── REGISTRATION ───────────────────────────────────────────────────────────────
export const postRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // get existing user
    const existingUser = await User.query().where("email", email)
    if (existingUser.length > 0) {
        customError(res, next, 'wrong email or password', 403)
        return
    }

    const hashedPassword = await getHashedPassword(password)

    const user = {
        ...req.body,
        password: hashedPassword,
    }


    try {
        const validatedUser = await regsiterUserSchemaWithEncryptedPassword.validateAsync(user);

        if (validatedUser) {
            const { uuid } = await User.query().insertAndFetch(validatedUser);

            await createAccessToken(res, { userUUID: uuid })
            await createRefreshToken(res, { userUUID: uuid })
            await createTokenExpirationHeader(res)

            return res.status(200).json({
                message: "user successfully registered",
            })
        }
    } catch (error) {
        res.status(400).json({
            error
        })
        next(error)
    }
}







//! ─── LOGIN ───────────────────────────────────────────────────────────────
export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const [user] = await User.query().where("email", email)
        const doesPasswordMatch = user ? await bcrypt.compareSync(password, user.password) : false

        if (doesPasswordMatch && user) {
            await createAccessToken(res, { userUUID: user.uuid })
            await createRefreshToken(res, { userUUID: user.uuid })
            await createTokenExpirationHeader(res)

            res.status(200).json({
                user: 'successfully loged in'
            })
        } else {
            customError(res, next, 'provide email or password are not valid', 401)
        }
    } catch (error) {
        next(error)
    }
}





//! ─── TOKEN REFRESH ───────────────────────────────────────────────────────────────
export const postRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    const { refresh_token } = req.headers
    interface IRefreshToken extends Token<any> { userUUID: string }

    try {
        const { userUUID } = jwt.verify(
            `${refresh_token}`, process.env.JWT_REFRESH_TOKEN_SECRET!) as IRefreshToken

        if (!userUUID)
            customError(res, next, 'token not valid', 403)

        await createAccessToken(res, { userUUID: userUUID })
        await createTokenExpirationHeader(res)

        res.status(200).json({
            message: 'user authanticated'
        })

    } catch (err) {
        customError(res, next, err.message)
    }
}


// export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
//     const { email, password } = req.body;

//     let reqeustToken = req.headers.authorization?.split(' ')[1]

//     await jwt.verify(`${reqeustToken}`, `${process.env.JWT_SECRET}`, async (err, userToken) => {
//         // check if the token is valid
//         if (err) {
//             customError(res, next, 'token not valid. unauthorized_client', 401)
//         } else {

                // interface userToken{
                //     userId: number
                // }

//             // if token is valid search the email and decode the password
//             let { userId } = userToken as userToken
//             try {
//                 const [user] = await User.query().where("email", email)
//                 const doesPasswordMatch = user ? await bcrypt.compareSync(password, user.password) : false

//                 if (doesPasswordMatch && user) {
//                     res.status(200).json({
//                         user: user
//                     })
//                 } else {
//                     customError(res, next, 'provide email or password are not valid', 401)
//                 }
//             } catch (error) {
//                 next(error)
//             }

//         }
//     })


// }