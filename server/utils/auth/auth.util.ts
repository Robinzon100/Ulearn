import { Response } from 'express';
import jwt from 'jsonwebtoken';


export const createJwtAuthorizationHeader = async (res: Response, object: any) => {
    const token = await jwt.sign({
        expiresIn: process.env.JWT_EXPIRATION,
        ...object,
    }, process.env.JWT_SECRET!)
 

    return res.setHeader('Authorization', `Bearer ${token}`)
}