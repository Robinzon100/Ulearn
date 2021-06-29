import jwt from 'jsonwebtoken';


export const createUserAffiliatedLink = async (userUUID: string) => {
    try {

        const token = await jwt.sign(
            { userUUID },
            process.env.JWT_REFRESH_TOKEN_SECRET!)

        return token
    } catch (err: any) {
        console.log(err.message);
    }
}




export const validateUserAffiliatedLink = async (token: string) => {
    try {
        const { userUUID } = await jwt.verify(
            token,
            process.env.JWT_REFRESH_TOKEN_SECRET!) as { userUUID: string }

        return userUUID
    } catch (err: any) {
        console.log(err.message);
    }
}