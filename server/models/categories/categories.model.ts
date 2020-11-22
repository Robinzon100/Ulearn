import tableNames from "./../../constants/tableNames";
import { Model } from 'objection'




export class MainCategories extends Model {
    id!: number;
    name!: string;
    created_at!: string;
    updated_at!: string;
    deleted_at!: string;

    static get tableName() {
        return tableNames.main_categories;
    }
}





export class SubCategories extends Model {
    id!: number;
    name!: string;
    created_at!: string;
    updated_at!: string;
    deleted_at!: string;
    main_category_id!: number;


    static get tableName() {
        return tableNames.sub_categories;
    }
}


export class SubSubCategories extends Model {
    id!: number;
    name!: string;
    created_at!: string;
    updated_at!: string;
    deleted_at!: string;
    sub_category!: number;


    static get tableName() {
        return tableNames.sub_sub_categories;
    }
}
