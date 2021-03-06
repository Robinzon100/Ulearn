import { Knex } from 'knex';

import tableNames from "../../constants/tableNames";
import { references, addTimestamps, referencesByUUID } from '../lib/table functions/tableUtils';
import { course } from "../../constants/defaults";

// TODO: add if user needs something before 
//       starting the course, like a program or a knolage of something
// TODO: add course cretor/instructor ID
// TODO: make the sub_sub_category an array of ID for the subsub category



export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.createTable(tableNames.courses, (table: Knex.TableBuilder) => {
        table.increments('id');
        table.uuid('uuid').defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('title', 100).notNullable();
        table.string('description', 250).notNullable();
        table.string('detailed_description', 3500).notNullable();
        table.integer('difficulty', 4).unsigned().notNullable();
        table.string('image_url', 2048).notNullable();
        table.string('resource_file_url', 2048).notNullable();
        table.float('duration');
        table.jsonb('what_will_you_learn').notNullable();
        table.integer('student_amount').defaultTo(course.student_amount);
        table.jsonb('detailed_rating').notNullable().defaultTo(JSON.stringify(course.detailed_rating))
        table.float('overall_rating');
        table.jsonb('units_sold').notNullable();

        table.float('price');
        table.float('ulearn_coin_price');
        table.float('discount_price');
        table.float('affiliation_price');
        addTimestamps(table);

        references(table, tableNames.course_content, true)
        references(table, tableNames.main_categories, true, 'main_category')
        references(table, tableNames.sub_categories, true, 'sub_category')
        references(table, tableNames.sub_sub_categories, true, 'sub_sub_category')
        references(table, tableNames.users, true, 'creator')
    })
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.questions,
            tableNames.comments,
            tableNames.courses,
            tableNames.course_content,
        ].map(async (tableName) => await knex.schema.dropTableIfExists(tableName)))
}