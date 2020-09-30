import { CreateTableBuilder } from "knex";

export const addSimpleIdAndName = async (table: CreateTableBuilder) => {
    table.increments('id');
    table.string('name', 255).unique();
}




export const references = (table: CreateTableBuilder, tableName: string, notNullable = true, columnName = '') => {
    const definition = table
        .integer(`${columnName || tableName}_id`)
        .unsigned()
        .references('id')
        .inTable(tableName)
        .onDelete('cascade');

    if (notNullable) {
        definition.notNullable();
    }
    return definition;
}