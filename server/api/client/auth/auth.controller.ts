import { Request, Response, NextFunction } from "express";
import { user } from "../../../constants/defaults";
import User from "./../../user/user.model";


export const registrationController = async (req: Request, res: Response, next: NextFunction) => {


    const insertTestUser = {
        Ulearn_coins: 21,
        affiliate_link: "null",
        created_at: "2020-10-11T19:01:38.584Z",
        deleted_at: "2020-10-11T19:01:38.584Z",
        description: "description",
        detailed_rattings: {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        },
        email: "email",
        favorite_main_category_id: 1,
        favorite_sub_category_ids: [1],
        full_name: "rowValue1",
        generated_categories_id: 1,
        generated_sub_category_ids: 1,
        image_url: "image_url",
        isInstructor: true,
        last_login: "2018-01-03T03:54:56.867Z",
        last_searched: [
            {
                name: "asd"
            }
        ],
        liked_courses_ids: [
            {
                name: "asd"
            }
        ],
        notifications: {
            name: "asd"
        },
        password: "password",
        paynment_info: {
            name: "asd"
        },
        personal_detales: {
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: ""
        },
        purchased_courses_Receipts: {
            name: "asd"
        },
        rating_titles_id: 2,
        ratting: 2,
        recovery_email: "recovery_email",
        restore_token: "restore_token",
        review_amount: 2,
        show_details_public: true,
        socials: {
            name: "asd"
        },
        student_amount: 1,
        subscriber_count: 123,
        token_expiration: "token_expiration",
        total_minutes_of_courses: 12,
        updated_at: "2020-10-11T19:01:38.584Z",
        user_type_id: 1,
        verified: true,
        viewed_courses_ids: []
    }


    const inserteduser = await User.query().insert(insertTestUser)



    res.status(200).json({
        users: inserteduser
    })
}