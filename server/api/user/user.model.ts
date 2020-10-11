import tableNames from "./../../constants/tableNames";
import connection from './../db';
import { Model } from 'objection';
const schema = require("./user.schema.json")
Model.knex(connection);




export default class User extends Model {
    Ulearn_coins!: number
    affiliate_link!: string
    created_at!: string
    deleted_at!: string
    description!: string
    detailed_rattings!: object
    email!: string
    favorite_main_category_id!: number
    favorite_sub_category_ids!: object
    full_name!: string
    generated_categories_id!: number
    generated_sub_category_ids!: number
    image_url!: string
    isInstructor!: boolean
    last_login!: string
    last_searched!: object
    liked_courses_ids!: object
    notifications!: object
    password!: string
    paynment_info!: object
    personal_detales!: object
    purchased_courses_Receipts!: object
    rating_titles_id!: number
    ratting!: number
    recovery_email!: string
    restore_token!: string
    review_amount!: number
    show_details_public!: boolean
    socials!: object
    student_amount!: number
    subscriber_count!: number
    token_expiration!: string
    total_minutes_of_courses!: number
    updated_at!: string
    user_type_id!: number
    verified!: boolean
    viewed_courses_ids!: object



    static get tableName() {
        return tableNames.users;
    }

    // static get jsonSchema() {
    //     return schema;
    // }
}


 