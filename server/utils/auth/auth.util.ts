import { Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';





//
// ─── SETTING HEADERS ────────────────────────────────────────────────────────────
//
export const createJwtAuthorizationHeader = async (res: Response, object: any) => {
    const token = await jwt.sign(
        object,
        process.env.JWT_ACCESS_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
        })

        res.setHeader('x-access_token', `${token}`)
    // res.setHeader('Authorization', `Bearer ${token}`)
}



export const createRefreshToken = async (res: Response, object: any) => {
    const refreshToken = await jwt.sign(
        object,
        process.env.JWT_REFRESH_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION
        })
        res.setHeader("x-refresh_token", `${refreshToken}`,)
    // res.setHeader("Set-Cookie", `token=${refreshToken}`,)

    // res.cookie('refresh_token', refreshToken, { httpOnly: true })
}



export const createTokenExpirationHeader = async (res: Response) => {
    res.setHeader('x-token_expiration', new Date().getTime() + process.env.TOKEN_EXPIRATION_IN_MILLISECONDS!)
}



//
// ─── AUTH UTILS ───────────────────────────────────────────────────────────
//
export const getHashedPassword = async (password: string) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    return hashedPassword
}
