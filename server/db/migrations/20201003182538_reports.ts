import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { references } from "../lib/table functions/tableUtils";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.reports, table => {
        table.increments('id');
        table.string("text", 1000);
        references(table, tableNames.types_of_reports, true, "type_of_report");
        references(table, tableNames.users, false, "reported");
        references(table, tableNames.users, true, "sender");
        references(table, tableNames.complaint_types, true, "complaint_type");

    })

    
    await knex.schema.createTable(tableNames.made_reports, table => {
        table.increments('id');
        references(table, tableNames.reports);
        references(table, tableNames.users);
    })
}


export async function down(knex: Knex): Promise<void> {
  
}

