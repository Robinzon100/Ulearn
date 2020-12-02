import Joi from "joi";
import { email, passwordUnencrypted } from './../utils';



export const loginUserSchema = Joi.object({
    email: email(Joi),
    password: passwordUnencrypted(),
})

