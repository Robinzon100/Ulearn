import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { references, addTimestamps } from '../lib/table functions/tableUtils';


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.reports, table => {
        table.increments('id');
        table.string("text", 1000);
        references(table, tableNames.types_of_reports, true, "type_of_report");
        references(table, tableNames.users, false, "reported");
        references(table, tableNames.users, true, "sender");
        addTimestamps(table)
    })
    
    
    await knex.schema.createTable(tableNames.made_reports, table => {
        table.increments('id');
        references(table, tableNames.reports, true, 'report');
        references(table, tableNames.users, true, 'user');
        addTimestamps(table)
    })
}


export async function down(knex: Knex): Promise<void> {
  
}

