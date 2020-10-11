import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { user } from "../../constants/defaults";


export async function seed(knex: Knex): Promise<void> {


    await knex(tableNames.users).insert([
        {
            id: 1,
            full_name: "rowValue1",
            email: "email",
            password: "password",
            recovery_email: "recovery_email",
            description: "description",
            last_login: "2018-01-03 07:54:56.867",
            restore_token: "restore_token",
            token_expiration: "token_expiration",
            image_url: "image_url",
            notifications: JSON.stringify({ "name": "asd" }),
            paynment_info: JSON.stringify({ "name": "asd" }),
            student_amount: 1,
            review_amount: 2,
            total_minutes_of_courses: 12,
            detailed_rattings: JSON.stringify(user.rating_starts),
            ratting: 2,
            verified: true,
            isInstructor: true,
            subscriber_count: 123,
            show_details_public: true,
            personal_detales: JSON.stringify(user.socials),
            socials: JSON.stringify({ "name": "asd" }),
            purchased_courses_Receipts:  JSON.stringify({ "name": "asd" }),
            Ulearn_coins: 21,
            last_searched:  JSON.stringify([{ "name": "asd" }]),
            liked_courses_ids:  JSON.stringify([{ "name": "asd" }]),

            favorite_main_category_id: 1,
            generated_categories_id: 1,
            user_type_id: 1,
            rating_titles_id: 2,
        }
    ]);
};
