import * as Knex from "knex";
import tableNames from "../../constants/tableNames"


export async function up(knex: Knex): Promise<void> {
    Promise.all([
        knex.schema.createTable(tableNames.rating_titles, (table) => {
            table.increments('id');
            table.string('name', 255);
        }),

        knex.schema.createTable(tableNames.user_types, (table) => {
            table.increments('id');
            table.string('name', 255);
            table.string('badge_image_url', 2084)
        })
    ])
}


export async function down(knex: Knex): Promise<void> {
    knex.schema
      .dropTable(tableNames.rating_titles)
      .dropTable(tableNames.user_types)
}

