import Joi from "joi";


export const regsiterUserSchema = Joi.object({
    full_name: Joi.string().min(6).max(225).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'ge', 'net', 'ru', 'tr']}}),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    recovery_email: Joi.string().email({tlds: {allow: ['com', 'ge', 'net', 'ru', 'tr']}}),
    favorite_main_category_ids: Joi.string().pattern(new RegExp('[[0-9,]+[0-9]]')),
    favorite_sub_category_ids: Joi.string().pattern(new RegExp('[[0-9,]+[0-9]]'))
})



