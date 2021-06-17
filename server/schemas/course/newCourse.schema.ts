import Joi from "joi";
import { passwordUnencrypted } from "../utils";

let detailedRatingSchema = Joi.object().keys({
    5: Joi.number(),
    4: Joi.number(),
    3: Joi.number(),
    2: Joi.number(),
    1: Joi.number(),
})

export const newCourseSchema = Joi.object({
    email: Joi.string().email().trim(),
    title: Joi.string().min(20).max(100).required(),
    description: Joi.string().min(30).max(250).required(),
    detailed_description: Joi.string().min(250).max(3500).required(),
    difficulty: Joi.number().min(1).max(3).required(),
    thumbnail_imageUrl: Joi.string().min(5).max(254).required(),
    intro_videoUrl: Joi.string().min(5).max(254).required(),
    duration: Joi.number().min(0.3).max(100).required(),
    what_will_you_learn: Joi.array().items(Joi.string().min(4).max(70)).required(),
    student_amount: Joi.number(),
    detailed_rating: detailedRatingSchema,
    overall_rating: Joi.number(),
    units_sold: Joi.number(),
    price: Joi.number().min(5).max(150).required(),
    ulearn_coin_price: Joi.number().min(100).max(200).required(),
    discount_price: Joi.number().min(5).max(150),
    affiliation_price: Joi.number().min(5).max(150).required(),

    course_content_id: Joi.number().required(),
    main_category_id: Joi.number(),
    sub_category_id: Joi.number(),
    creator_id: Joi.number(),
})