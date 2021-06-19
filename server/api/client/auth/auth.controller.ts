import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";


import { getHashedPassword, createAccessToken } from './../../../utils/auth/auth.util';
import User from '../../../models/user/user.model';
import customError from '../../../utils/createError';
import { regsiterUserSchemaWithEncryptedPassword } from '../../../schemas/auth/schema.registration';
import { createRefreshToken, createTokenExpirationHeader } from '../../../utils/auth/auth.util';




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
        const doesPasswordMatch = user
            ? await bcrypt.compare(password, user.password)
            : false

        console.log(doesPasswordMatch);
        

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
    const { auth_refresh_token } = req.headers

    try {
        const { userUUID } = jwt.verify(
            `${auth_refresh_token}`, process.env.JWT_REFRESH_TOKEN_SECRET!) as { userUUID: string }

        if (!userUUID)
            customError(res, next, 'token not valid', 403)

        await createAccessToken(res, { userUUID: userUUID })
        await createTokenExpirationHeader(res)

        res.status(200).json({
            message: 'user authanticated',
        })

    } catch (err: any) {
        customError(res, next, err.message)
    }
}

