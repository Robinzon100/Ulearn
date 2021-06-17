import { Knex } from 'knex';
import { courseContent } from '../../constants/defaults';

import tableNames from "../../constants/tableNames";
import { addTimestamps } from '../lib/table functions/tableUtils';




export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.createTable(tableNames.course_content, (table: Knex.TableBuilder) => {
        table.increments('id').nullable();
        table.uuid('uuid').defaultTo(knex.raw('uuid_generate_v4()')).nullable();
        table.jsonb('curriculum').defaultTo(JSON.stringify(courseContent.curriculum)).nullable();
        table.string('description', 3500).nullable();
        table.string('resource_file_url', 254);
        addTimestamps(table);
    })
}

export async function down(knex: Knex): Promise<void> {

}


