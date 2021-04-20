
import orderedTableNames from "../../constants/orderedTableNames";
import tableNames from "../../constants/tableNames";
import { userTypesDefaults, ratingTitlesDefaults, typesOfReportsDefaults } from '../../constants/seeds/defaults/initials.defaults'

export async function seed(knex: any): Promise<void> {
    await Promise.all(orderedTableNames.map((name) => knex(name).del()));

    
    let userTypes = await knex(tableNames.user_types)
        .insert(userTypesDefaults)
        .returning('*');
    let rating_titles = await knex(tableNames.rating_titles)
        .insert(ratingTitlesDefaults)
        .returning('*');
    let types_of_reports = await knex(tableNames.types_of_reports)
        .insert(typesOfReportsDefaults)
        .returning('*');
};
