import { Request, Response, NextFunction } from "express";
import User from "../../../../models/user/user.model";
import customError from '../../../../utils/createError';
import bcrypt from 'bcrypt';


interface IClientUser {
    full_name: string,
    email: string,
    recovery_email: string,
    descirption: string,
    imageUrl: string,
    notifications: any[],
    review_amount: number,
    total_minutes_of_course: number,
    detailed_ratings: any,
    rating: any,
    verified: boolean,
    isInstructor: boolean,
    subscriber_count: number,
    personal_detales: any,
    socials: any,
    purchased_courses_Receipts: any,
    Ulearn_coins: number,
    affiliate_link: string[],
    instructor_category_id: number[],
    favorite_main_category_ids: number[],
    favorite_sub_category_ids: number[]
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const {
        full_name,
        email,
        recovery_email,
        descirption,
        imageUrl,
        notifications,
        review_amount,
        total_minutes_of_course,
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
    } = req.user[0] as IClientUser

    const user = {
        full_name,
        email,
        recovery_email,
        descirption,
        imageUrl,
        notifications,
        review_amount,
        total_minutes_of_course,
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


    res.json({
        user
    })
}







export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password } = req.body
        const { id } = req.user[0]

        const passwordMatch = password
            ? bcrypt.compareSync(password, req.user[0].password)
            : false

        if (passwordMatch) {
            const update = await User
                .query()
                .patchAndFetchById(id, req.body)
            return res.status(200).json({
                update
            })
        }

        customError(res, next, 'invalid data', 401)

    } catch (err) {
        customError(res, next, 'invalid data', 401)
    }
}