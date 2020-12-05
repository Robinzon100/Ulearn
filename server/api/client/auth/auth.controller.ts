import { createJwtAuthorizationHeader } from './../../../utils/auth/auth.util';
import { Request, Response, NextFunction } from "express";
import User from '../../../models/user/user.model';
import bcrypt from "bcrypt";
import customError from '../../../utils/createError';
import { regsiterUserSchemaWithEncryptedPassword } from '../../../schemas/auth/schema.registration';




//! ─── REGISTRATION ───────────────────────────────────────────────────────────────
export const postRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // get existing user
    const existingUser = await User.query().where("email", email)
    if (existingUser.length > 0) {
        customError(res, next, 'wrong email or password', 403)
    } else {
        // hash password
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const user = {
            ...req.body,
            password: hashedPassword,
        }


        try {
            // validate the created use objects
            const validatedUser = await regsiterUserSchemaWithEncryptedPassword.validateAsync(user);
            if (validatedUser) {
                const { id } = await User.query().insert(validatedUser);

                await createJwtAuthorizationHeader(res, { userId: id })

                res.status(200).json({
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
}







//! ─── LOGIN ───────────────────────────────────────────────────────────────
export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const [user] = await User.query().where("email", email)
        const doesPasswordMatch = user ? await bcrypt.compareSync(password, user.password) : false

        if (doesPasswordMatch && user) {
            await createJwtAuthorizationHeader(res, { userId: user.id })

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