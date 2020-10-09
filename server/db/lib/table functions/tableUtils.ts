import { CreateTableBuilder } from "knex";

export const addSimpleIdAndName = async (table: CreateTableBuilder) => {
    table.increments('id').notNullable();
    table.string('name', 255).unique();
    table.timestamps(false, true);
    table.dateTime('deleted_at');
}


export const addTimestamps = async (table: CreateTableBuilder) => {
    table.timestamps(false, true);
    table.dateTime('deleted_at');
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