import * as Knex from "knex";
import orderedTableNames from "../../constants/orderedTableNames";
import { mainCategories, subCategories } from "../../constants/seeds/defaults/categories";
import tableNames from "../../constants/tableNames";

export async function seed(knex: Knex): Promise<void> {

    
    // await knex(tableNames.sub_categories).del()
    // await knex(tableNames.main_categories).del()


     
    await knex(tableNames.main_categories).insert(mainCategories).returning('*');
    await knex(tableNames.sub_categories).insert(subCategories).returning('*');

    // console.log({ main_categories }, { sub_categories })
};