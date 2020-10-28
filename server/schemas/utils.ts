export const email = (joi: any) => {
    return joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ge', 'net', 'ru', 'tr'] } })
}

export const arrayStringWithIds = (joi: any) => {
    return joi.string().pattern(/^[[0-9,]+[0-9]]*$/, 'id')
}

export const password = (joi: any) => {
    return joi.string().pattern(new RegExp(/^\$2[ayb]\$.{56}$/))
}

