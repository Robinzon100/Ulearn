import Joi from "joi";



export const refreshTokenSchema = Joi.object({
    refresh_token: Joi.string().alphanum().min(3).max(225).required()
})

 
