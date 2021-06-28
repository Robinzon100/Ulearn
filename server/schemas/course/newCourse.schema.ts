import Joi from "joi";

let detailedRatingSchema = Joi.object().keys({
    5: Joi.number(),
    4: Joi.number(),
    3: Joi.number(),
    2: Joi.number(),
    1: Joi.number(),
})

export const newCourseSchema = Joi.object({
    courseInfo: Joi.object({
        title: Joi.string().min(20).max(100).required(),
        description: Joi.string().min(30).max(250).required(),
        detailed_description: Joi.string().min(20).max(3500).required(),
        difficulty: Joi.number().min(1).max(3).required(),
        duration: Joi.number().min(.3).max(900).required(),
        what_will_you_learn: Joi.array().min(3).max(6).items(Joi.string().min(4).max(70)).required(),
        image_url: Joi.string().max(2048),
        resource_file_url: Joi.string().max(2048),

        price: Joi.number().min(5).max(150).required(),
        ulearn_coin_price: Joi.number().min(5).max(200).required(),
        discount_price: Joi.number().min(5).max(150),

        main_category_id: Joi.number().required(),
        sub_category_id: Joi.number().required(),

    }),

    curriculum: Joi.array().min(1).max(20)
})
