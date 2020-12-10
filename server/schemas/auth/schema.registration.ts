import Joi from "joi";
import { email, arrayStringWithIds, passwordUnencrypted, passwordEncrypted } from './../utils';



export const regsiterUserSchema = Joi.object({
    full_name: Joi.string().min(2).max(225).required().trim(),
    email: email(Joi),
    password: passwordUnencrypted(),
    recovery_email: email(Joi),
    favorite_main_category_ids: arrayStringWithIds(Joi),
    favorite_sub_category_ids: arrayStringWithIds(Joi)
})


export const regsiterUserSchemaWithEncryptedPassword = Joi.object({
    full_name: Joi.string().min(6).max(225).required().trim(),
    email: email(Joi),
    password: passwordEncrypted(Joi),
    recovery_email: email(Joi),
    favorite_main_category_ids: arrayStringWithIds(Joi),
    favorite_sub_category_ids: arrayStringWithIds(Joi)
})

