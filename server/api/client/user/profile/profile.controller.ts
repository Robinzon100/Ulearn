import { Request, Response, NextFunction } from "express";
import customError from '../../../../utils/createError';



export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        user: req.user 
    })
}