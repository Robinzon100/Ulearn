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

    //TODO: implement the logic so that no 2 emails 
    //      shuld exists and if soo send error code  



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
            const {id, email} = await User.query().insert(validatedUser);

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



export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;

    //get user by email
    const user = await User.query().where("email", email)

    res.status(200).json({
        user: user
    })


        // if exsists compare passwords

        // if not send error message and status code of 401

    // bcrypt.compare(password, )
}