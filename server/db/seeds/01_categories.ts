import * as Knex from 'knex';
import { mainCategories, subCategories, subSubCategories } from '../../constants/seeds/defaults/categories.defaults';
import tableNames from '../../constants/tableNames';

export async function seed(knex: Knex): Promise<void> {

    
    await knex(tableNames.sub_categories).del()
    await knex(tableNames.main_categories).del()
    await knex(tableNames.sub_sub_categories).del()

    await knex(tableNames.main_categories).insert(mainCategories).returning('*');
    await knex(tableNames.sub_categories).insert(subCategories).returning('*');
    await knex(tableNames.sub_sub_categories).insert(subSubCategories).returning('*');
};