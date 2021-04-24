import { Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';





// ─── SETTING HEADERS ────────────────────────────────────────────────────────────
export const createAccessToken = async (res: Response, object: any) => {
    const token = await jwt.sign(
        object,
        process.env.JWT_ACCESS_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
        })

    res.setHeader('auth-access_token', `${token}`)
}



export const createRefreshToken = async (res: Response, object: any) => {
    const refreshToken = await jwt.sign(
        object,
        process.env.JWT_REFRESH_TOKEN_SECRET!,
        {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION})
    res.setHeader("auth-refresh_token", `${refreshToken}`,)
}





export const createTokenExpirationHeader = async (res: Response) => {
    res.setHeader('auth-token_expiration',
        new Date().getTime() + +process.env.TOKEN_EXPIRATION_IN_MILLISECONDS!)
}



// ─── AUTH UTILS ───────────────────────────────────────────────────────────
export const getHashedPassword = async (password: string) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    return hashedPassword
}
