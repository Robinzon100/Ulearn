import { Request, Response, NextFunction } from "express";
import { user } from "../../../constants/defaults";
import User from '../../../models/user/user.model';


export const registrationController = async (req: Request, res: Response, next: NextFunction) => {
    const {
        full_name,
        email,
        password,
        recovery_email,
        favorite_main_category_ids,
        favorite_sub_category_ids } = req.body;

    
       
    const user = {
        full_name: full_name,
        email: email,
        password: password,
        recovery_email: recovery_email,
        favorite_main_category_ids: favorite_main_category_ids,
        favorite_sub_category_ids: favorite_sub_category_ids
    }

    try {
        const inserteduser = await User.query().insert(user)


        res.status(200).json({
            users: inserteduser
        })
    } catch (error) {
        console.log(error)
    }



}