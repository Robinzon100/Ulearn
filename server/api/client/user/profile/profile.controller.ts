import { Request, Response, NextFunction } from "express";
import User from "../../../../models/user/user.model";
import customError from '../../../../utils/createError';
import bcrypt from 'bcrypt';
import { getHashedPassword } from '../../../../utils/auth/auth.util';




export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            full_name,
            email,
            recovery_email,
            description,
            image_url,
            notifications,
            review_amount,
            total_minutes_of_courses,
            detailed_ratings,
            rating,
            verified,
            isInstructor,
            subscriber_count,
            personal_detales,
            socials,
            purchased_courses_Receipts,
            Ulearn_coins,
            affiliate_link,
            instructor_category_id,
            favorite_main_category_ids,
            favorite_sub_category_ids,
            liked_courses_ids
        } = req.user[0] as User



        const liked_courses = await User
            .query()
            .whereInComposite(
                'id',
                liked_courses_ids
            )

        const user = {
            full_name,
            email,
            recovery_email,
            description,
            image_url,
            notifications,
            review_amount,
            total_minutes_of_courses,
            detailed_ratings,
            rating,
            verified,
            isInstructor,
            subscriber_count,
            personal_detales,
            socials,
            purchased_courses_Receipts,
            Ulearn_coins,
            affiliate_link,
            instructor_category_id,
            favorite_main_category_ids,
            favorite_sub_category_ids,
            liked_courses,
        }


        res.json({
            user
        })
    } catch (err) {
        customError(res, next, err.message, 500)
    }
}







export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, current_password } = req.body
        const { id } = req.user[0]
        let password: string



        const existingEmail = await User.query().where('email', email)
        if (existingEmail.length > 0)
            return customError(res, next, 'invalid data', 401)


        if (req.body.new_password)
            req.body.password = await getHashedPassword(req.body.new_password)


        const passwordMatch = current_password
            ? bcrypt.compareSync(current_password, req.user[0].password)
            : false


        delete req.body['current_password']
        delete req.body["new_password"]


        if (passwordMatch) {


            const {
                full_name,
                email,
                recovery_email,
                description,
                image_url,
                notifications,
                review_amount,
                total_minutes_of_courses,
                detailed_ratings,
                rating,
                verified,
                isInstructor,
                subscriber_count,
                personal_detales,
                socials,
                purchased_courses_Receipts,
                Ulearn_coins,
                affiliate_link,
                instructor_category_id,
                favorite_main_category_ids,
                favorite_sub_category_ids,
            } = await User
                .query()
                .patchAndFetchById(id, req.body) as User




            return res.status(200).json({
                update: {
                    full_name,
                    email,
                    recovery_email,
                    description,
                    image_url,
                    notifications,
                    review_amount,
                    total_minutes_of_courses,
                    detailed_ratings,
                    rating,
                    verified,
                    isInstructor,
                    subscriber_count,
                    personal_detales,
                    socials,
                    purchased_courses_Receipts,
                    Ulearn_coins,
                    affiliate_link,
                    instructor_category_id,
                    favorite_main_category_ids,
                    favorite_sub_category_ids,
                }
            })
        }
        customError(res, next, 'invalid data', 403)

    } catch (err) {
        customError(res, next, 'invalid data', 403)
    }
}