import { Knex } from 'knex';
import tableNames from "../../constants/tableNames"
import { addSimpleIdAndName, references } from '../lib/table functions/tableUtils';



export async function up(knex: Knex): Promise<void> {
    await Promise.all([
        //! Rating title
        knex.schema.createTable(tableNames.rating_titles, (table: any) => {
            addSimpleIdAndName(table)
            table.string('badge_image_url', 2084)

        }),

        //! User types
        knex.schema.createTable(tableNames.user_types, (table: any) => {
            addSimpleIdAndName(table)
        }),

        //! Report types
        knex.schema.createTable(tableNames.types_of_reports, (table: any) => {
            addSimpleIdAndName(table)
        }),

        // //! Complaint types
        // knex.schema.createTable(tableNames.complaint_types, (table: any) => {
        //     addSimpleIdAndName(table)
        // }),
    ]);

    //! Category and sub-category
    await knex.schema.createTable(tableNames.main_categories, (table: any) => {
        addSimpleIdAndName(table)
    });

    await knex.schema.createTable(tableNames.sub_categories, (table: any) => {
        addSimpleIdAndName(table)
        references(table, tableNames.main_categories, true, 'main_category')
    });

    await knex.schema.createTable(tableNames.sub_sub_categories, (table: any) => {
        addSimpleIdAndName(table)
        references(table, tableNames.sub_categories, true, 'sub_category')
    });
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.sub_sub_categories,
            tableNames.sub_categories,
            tableNames.rating_titles,
            tableNames.user_types,
            tableNames.main_categories,
            tableNames.types_of_reports,
            // tableNames.complaint_types,
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
    );
}

