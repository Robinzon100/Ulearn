import Joi from "joi";
import { passwordUnencrypted } from "../utils";

export const updateUserSchema = Joi.object({
    email: Joi.string().email().trim(),
    full_name: Joi.string().min(2).max(225).trim(),
    new_password: passwordUnencrypted(),
    recovery_email: Joi.string().email().trim(),
    description: Joi.string().max(1000),
    image_url: Joi.string().max(2048),
    payment_info: Joi.object(),
    current_password: passwordUnencrypted().required(),
    socials: Joi.object().max(5)
})