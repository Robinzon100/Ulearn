export const parseSocials = async (socials, setState) => {
    let getSocials = [];
    for (const [key, value] of Object.entries(socials)) {
        getSocials.push({ name: key, url: value });
    }
    setState(getSocials);
}



export const removeEmptyValuedEntries = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        if ((value as string).length <= 0)
            delete obj[key]
    }
    return obj
}