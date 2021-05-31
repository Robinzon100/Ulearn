export const parseSocials = async (socials, setState) => {
    let getSocials = [];
    for (const [key, value] of Object.entries(socials)) {
        getSocials.push({ name: key, url: value });
    }
    setState(getSocials);
}



export const removeEmptyValuedEntries = (obj, nestedObject?) => {
    for (const [key, value] of Object.entries(obj)) {
        if ((value as string).length <= 0)
            delete obj[key]
    }

    if (nestedObject) {
        for (const [key, value] of Object.entries(obj[nestedObject])) {
            if ((value as string).length <= 0)
                delete obj[nestedObject][key]
        }
    }
    return obj
}