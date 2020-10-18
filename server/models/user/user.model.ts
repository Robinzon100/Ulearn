import tableNames from "./../../constants/tableNames";
const schema = require("./user.schema.json")
import { Model } from 'objection'




export default class User extends Model {
    full_name!: string
    email!: string
    password!: string
    recovery_email!: string
    description!: string
    last_login!: string
    restore_token!: string
    token_expiration!: string
    image_url!: string
    notifications!: any
    paynment_info!: any
    student_amount!: number
    review_amount!: number
    total_minutes_of_courses!: number
    detailed_ratings!: any
    rating!: number
    verified!: boolean
    isInstructor!: boolean
    subscriber_count!: number
    show_details_public!: boolean
    personal_detales!: any
    socials!: any
    purchased_courses_Receipts!: any
    Ulearn_coins!: number
    affiliate_link!: string
    last_searched!: any
    liked_courses_ids!: any
    viewed_courses_ids!: any
    favorite_main_category_ids!: any
    favorite_sub_category_ids!: any
    generated_categories_ids!: any
    generated_sub_category_ids!: any
    rating_title_id!: number
    favorite_main_category_id!: number
    instructor_category_id!: number
    user_type_id!: number


    
    static get tableName() {
        return tableNames.users;
    }

    // static get jsonSchema() {
    //     return schema;
    // }
}


