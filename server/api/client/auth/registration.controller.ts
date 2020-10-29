import { regsiterUserSchema } from './../../../schemas/auth/schema.registration';
import { Request, Response, NextFunction } from "express";
import User from '../../../models/user/user.model';
import bcrypt from "bcrypt";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import customError from '../../../utils/createError';




//
// ─── REGISTRATION ───────────────────────────────────────────────────────────────
//
export const postRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;


    const existingUser = await User.query().where("email", email)

    if (existingUser.length > 0) {
        customError(res, next, 'user with that email already exists', 403)
    } else {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const user = {
            ...req.body,
            password: hashedPassword,
        }


        try {
            const validatedUser = await regsiterUserSchema.validateAsync(user);

            if (validatedUser) {
                const { id, email } = await User.query().insert(validatedUser);

                const userToken = await jwt.sign({
                    expiresIn: process.env.JWT_EXPIRATION,
                    userId: id,
                    email: email
                }, process.env.JWT_SECRET!)

                res.status(200).json({
                    status: "success",
                    userToken
                })
            }
        } catch (error) {
            res.status(400)
            next(error)
        }
    }
}



export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        customError(res, next, 'insufficient data', 400)
    }

    try {
        const [user] = await User.query().where("email", email)
        const doesPasswordMatch = user ? await bcrypt.compareSync(password, user.password) : false

        if (doesPasswordMatch && user) {
            res.status(200).json({
                user: user
            })
        } else {
            customError(res, next, 'provide email or password are not valid', 401)
        }

    } catch (error) {
        next(error)
    }


}