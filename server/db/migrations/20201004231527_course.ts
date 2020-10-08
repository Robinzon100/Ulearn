import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { references } from '../lib/table functions/tableUtils';
import { course } from "../../constants/defaults";



export async function up(knex: Knex): Promise<void> {
    // await knex.schema.createTable(tableNames.courses, table =>{
    //     table.increments();
    //     table.string("name", 70).notNullable();
    //     table.string("description", 70).notNullable();
    //     table.string("detaled_description", 70).notNullable();
    //     table.string("thumbnailImageUrl", 254).notNullable();
    //     table.string("videoUrl", 254).notNullable();
    //     table.float("duration");
    //     table.integer("difficulty", 5).unsigned().notNullable();

        

    //     table.float('price');
    //     table.float('discount_price');
    //     table.float('affiliation_price');
        

    // })
}


export async function down(knex: Knex): Promise<void> {
}

