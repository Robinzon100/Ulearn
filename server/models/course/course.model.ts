import tableNames from "./../../constants/tableNames";
import { Model } from 'objection'



export default class Course extends Model {

    id!: number;
    uuid!: string;
    title!: string;
    description!: string;
    detailed_description!: string;
    difficulty!: number;
    thumbnail_imageUrl!: string;
    intro_videoUrl!: string;
    duration!: number;
    what_will_you_learn!: string[];
    student_amount!: number;
    detailed_rating!: any[];
    overall_rating!: number;
    units_sold!: number;
    price!: number;
    ulearn_coin_price!: number;
    discount_price!: number;
    affiliation_price!: number;

    course_content?: any;

    course_content_id!: number;
    main_category_id!: number;
    sub_category_id!: number;
    creator_id!: number;

    static get tableName() {
        return tableNames.courses;
    }

    // static get jsonSchema() {
    //     return schema;
    // }
}


