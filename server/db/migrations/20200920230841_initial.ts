import * as Knex from "knex";
import tableNames from "../../constants/tableNames"
import { addSimpleIdAndName, references } from '../lib/table functions/tableUtils';



export async function up(knex: Knex): Promise<void> {
    await Promise.all([
        //! Rating title
        knex.schema.createTable(tableNames.rating_titles, (table) => {
            addSimpleIdAndName(table)
        }),

        //! User types
        knex.schema.createTable(tableNames.user_types, (table) => {
            addSimpleIdAndName(table)
            table.string('badge_image_url', 2084)
        }),

        //! Report types
        knex.schema.createTable(tableNames.types_of_reports, (table) => {
            addSimpleIdAndName(table)
        }),
        //! Complaint types
        knex.schema.createTable(tableNames.complaint_types, (table) => {
            addSimpleIdAndName(table)
        }),
    ]);

    //! Category and sub-category
    await knex.schema.createTable(tableNames.sub_categories, (table) => {
        addSimpleIdAndName(table)
    });

    await knex.schema.createTable(tableNames.main_categories, (table) => {
        table.increments('id').notNullable();
        table.string('name', 255).unique();
        table.json("sub_categories_ids")
    });
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.rating_titles,
            tableNames.user_types,
            tableNames.main_categories,
            tableNames.sub_categories,
            tableNames.types_of_reports,
            tableNames.complaint_types,
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
    );
}

