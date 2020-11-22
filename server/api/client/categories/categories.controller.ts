import { regsiterUserSchema } from './../../../schemas/auth/schema.registration';
import { Request, Response, NextFunction } from "express";
import { MainCategories, SubCategories, SubSubCategories } from './../../../models/categories/categories.model';
import customError from '../../../utils/createError';



export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    const main_categories = await MainCategories.query()
        .select('id', 'name')
        .where('deleted_at', null);
        
    const sub_categories = await SubCategories.query()
        .select('id', 'name', 'main_category_id')
        .where('deleted_at', null);
        
    const sub_sub_categories = await SubSubCategories.query()
        .select('id', 'name','sub_category_id')
        .where('deleted_at', null);

    res.status(200).json({
        categories: {
            main_categories,
            sub_categories,
            sub_sub_categories
        }
    })
}