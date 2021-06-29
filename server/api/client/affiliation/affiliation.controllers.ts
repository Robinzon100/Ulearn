import { NextFunction, Request, Response } from "express";
import customError from '../../../utils/createError';
import { validateUserAffiliatedLink } from '../../../utils/affiliatedLinks/affiliatedLinks.utils';
import User from "../../../models/user/user.model";
import { raw } from 'objection';
import { decodeAccessToken } from "../../../middleware/auth/validateToken.middleware";



export const getAffiliation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let currentUserUUID

        const { token } = req.params
        if (req.headers.auth_access_token) {
            const { userUUID } = await decodeAccessToken(req) as { userUUID: string }
            currentUserUUID = userUUID
        }

        const userTokenUUID = await validateUserAffiliatedLink(token)


        if (userTokenUUID == currentUserUUID) {
            return res.json({
                message: 'nice try :)'
            })
        }

        const updatedUser = await User
            .query()
            .increment('Ulearn_coins', 5)
            .where('uuid', userTokenUUID);

        return res.json({
            message: 'coins added to affiliate'
        })
    } catch (err: any) {
        customError(res, next, err.messagem, 404)
    }
}