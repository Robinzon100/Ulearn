import Joi from "joi";
import { email, arrayStringWithIds, password } from './../utils';



export const regsiterUserSchema = Joi.object({
    full_name: Joi.string().min(6).max(225).required(),
    email: email(Joi),
    password: password(Joi),
    recovery_email: email(Joi),
    favorite_main_category_ids: arrayStringWithIds(Joi),
    favorite_sub_category_ids: arrayStringWithIds(Joi)
})

