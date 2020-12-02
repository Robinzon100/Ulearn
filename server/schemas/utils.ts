import PasswordComplexity from "joi-password-complexity";


const complexityOptions = {
    min: 6,
    max: 128,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1
};


export const email = (joi: any) => {
    return joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ge', 'net', 'ru', 'tr'] } }).trim().required()
}

export const arrayStringWithIds = (joi: any) => {
    return joi.string().pattern(/^[[0-9,]+[0-9]]*$/, 'id').required()
}

export const passwordUnencrypted = () => {
    return PasswordComplexity(complexityOptions).required();
}

export const passwordEncrypted = (joi: any) => {
    return joi.string().pattern(new RegExp(/^\$2[ayb]\$.{6,56}$/)).trim().required()
}

