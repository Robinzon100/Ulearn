import PasswordComplexity from "joi-password-complexity";
import { passwordComplexityOptions } from "../constants/config.consts";




export const email = (joi: any) => {
    return joi
        .string()
        .email(
            {
                minDomainSegments: 2
            })
        .trim()
        .required()
}

export const arrayStringWithIds = (joi: any) => {
    return joi
        .string()
        .pattern(/^[[0-9,]+[0-9]]*$/, 'id')
        .required()
}

export const passwordUnencrypted = () => {
    return PasswordComplexity(passwordComplexityOptions);
}

export const passwordEncrypted = (joi: any) => {
    return joi
        .string()
        .pattern(new RegExp(/^\$2[ayb]\$.{6,56}$/))
        .trim()
        .required()
}

