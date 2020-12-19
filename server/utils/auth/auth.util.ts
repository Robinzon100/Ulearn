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

        res.setHeader('accessToken', `${token}`)
    // res.setHeader('Authorization', `Bearer ${token}`)
}



export const createRefreshToken = async (res: Response, object: any) => {
    const refreshToken = await jwt.sign(
        object,
        process.env.JWT_REFRESH_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION
        })
        res.setHeader("refreshToken", `${refreshToken}`,)
    // res.setHeader("Set-Cookie", `token=${refreshToken}`,)

    // res.cookie('refresh_token', refreshToken, { httpOnly: true })
}



//
// ─── AUTH UTILS ───────────────────────────────────────────────────────────
//
export const getHashedPassword = async (password: string) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    return hashedPassword
}