import { Response } from 'express';
import jwt from 'jsonwebtoken';


export const createJwtAuthorizationHeader = async (res: Response, object: any) => {
    const token = await jwt.sign(
        object,
        process.env.JWT_ACCESS_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
        })

    return res.setHeader('Authorization', `Bearer ${token}`)
}



export const createRefreshToken = async (res: Response, object: any) => {
    const refreshToken = await jwt.sign(
        object,
        process.env.JWT_REFRESH_TOKEN_SECRET!,
        {
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION
        })

    return res.cookie('refresh_token', refreshToken)
}