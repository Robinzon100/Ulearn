export const email = (joi: any) => {
    return joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ge', 'net', 'ru', 'tr'] } }).trim().required()
}

export const arrayStringWithIds = (joi: any) => {
    return joi.string().pattern(/^[[0-9,]+[0-9]]*$/, 'id').required()
}

export const passwordUnencrypted = (joi: any) => {
    return joi.string().trim().required()
}

export const passwordEncrypted = (joi: any) => {
    return joi.string().pattern(new RegExp(/^\$2[ayb]\$.{6,56}$/)).trim().required()
}

