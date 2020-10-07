import * as Knex from "knex";
import orderedTableNames from "../../constants/orderedTableNames";
import tableNames from "../../constants/tableNames";

export async function seed(knex: Knex): Promise<void> {
    await Promise.all(
        orderedTableNames.map(tableName => knex(tableName).del())
    )

    // Inserts seed entries
    await knex(tableNames.user_types).insert([
        { id: 1, name: "admin" },
        { id: 2, name: "moderator" },
        { id: 3, name: "user" },
    ]).returning('*');
};
