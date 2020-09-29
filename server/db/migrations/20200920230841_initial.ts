import * as Knex from "knex";
import tableNames from "../../constants/tableNames"


export async function up(knex: Knex): Promise<void> {
    await Promise.all([
        knex.schema.createTable(tableNames.rating_titles, (table) => {
            table.increments('id');
            table.string('name', 255).unique();
        }),

        knex.schema.createTable(tableNames.user_types, (table) => {
            table.increments('id');
            table.string('name', 255).unique();
            table.string('badge_image_url', 2084)
        }),
        knex.schema.createTable(tableNames.types_of_reports, (table) => {
            table.increments('id');
            table.string('name', 255).unique();
        }),
        knex.schema.createTable(tableNames.complaint_types, (table) => {
            table.increments('id');
            table.string('name', 255).unique();
        }),
    ]);
    await knex.schema
        .createTable(tableNames.sub_categories, function (subCategory) {
            subCategory.increments('id').primary();
            subCategory.string('name', 255).unique();
        })
        .createTable(tableNames.main_categories, function (main) {
            main.increments('id').primary();
            main.string('name', 255).unique();
            main.integer('id').references('id').inTable(tableNames.sub_categories).onDelete('cascade');
        });
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.rating_titles,
            tableNames.user_types
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
    );
}

