
export const addSimpleIdAndName = async (table: any) => {
    table.increments('id').notNullable();
    table.string('name', 255);
    table.timestamps(false, true);
    table.dateTime('deleted_at');
}


export const addTimestamps = async (table: any) => {
    table.timestamps(false, true);
    table.dateTime('deleted_at');
}


export const references = (table: any, tableName: string, notNullable = true, columnName = '') => {
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




export const referencesByUUID = (table: any, tableName: string, notNullable = true, columnName = '') => {
    const definition = table
        .integer(`${columnName || tableName}_uuid`)
        .unsigned()
        .references('uuid')
        .inTable(tableName)
        .onDelete('cascade');

    if (notNullable)
        definition.notNullable();

    return definition;
}