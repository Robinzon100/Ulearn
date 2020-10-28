import { regsiterUserSchema } from './../../../schemas/auth/schema.registration';
import { Request, Response, NextFunction } from "express";
import User from '../../../models/user/user.model';
import bcrypt from "bcrypt";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';





//
// ─── REGISTRATION ───────────────────────────────────────────────────────────────
//
export const postRegistration = async (req: Request, res: Response, next: NextFunction) => {

    // initialize the data
    const {
        full_name,
        email,
        password,
        recovery_email,
        favorite_main_category_ids,
        favorite_sub_category_ids } = req.body;

    // if Emeil exists 
    const existingUser = await User.query().where("email", email)


    if (existingUser.length > 0) {
        res.status(403)
        const error = new Error('user with that email already exists')
        next(error)
    } else {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const user = {
            full_name: full_name,
            email: email,
            password: hashedPassword,
            recovery_email: recovery_email,
            favorite_main_category_ids: favorite_main_category_ids,
            favorite_sub_category_ids: favorite_sub_category_ids
        }


        try {
            const validatedUser = await regsiterUserSchema.validateAsync(user);


            // user is validated
            if (validatedUser) {
                const { id, email } = await User.query().insert(validatedUser);

                //jwt signing
                const userToken = await jwt.sign({
                    expiresIn: process.env.JWT_EXPIRATION,
                    userId: id,
                    email: email
                }, process.env.JWT_SECRET!)

                // sending status and the response
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

    try {
        const [user] = await User.query().where("email", email)
        const doesPasswordMatch = user ? await bcrypt.compareSync(password, user.password) : false

        if (doesPasswordMatch && user) {
            res.status(200).json({
                user: user
            })
        } else {
            res.status(401);
            const error = new Error('provide email or password are not valid')
            next(error)
        }

    } catch (error) {
        next(error)
    }


}