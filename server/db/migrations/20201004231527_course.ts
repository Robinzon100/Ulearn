import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { references, addTimestamps } from '../lib/table functions/tableUtils';
import { course } from "../../constants/defaults";

// TODO: add if user needs something before 
//       starting the course, like a program or a knolage of something



export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.courses, table => {
        table.increments();
        table.string("name", 70).notNullable();
        table.string("description", 70).notNullable();
        table.string("detaled_description", 70).notNullable();
        table.integer("difficulty", 4).unsigned().notNullable();
        table.string("thumbnail_imageUrl", 254).notNullable();
        table.string("intro_videoUrl", 254).notNullable();
        table.float("duration");
        table.jsonb('what_will_you_learn').notNullable();
        table.integer("student_amount").defaultTo(course.student_amount);
        table.jsonb('detaled_rating').notNullable().defaultTo(JSON.stringify(course.detaled_rating))
        table.float('overall_rating');
        table.jsonb('course_content').notNullable();
        table.jsonb('units_sold').notNullable();

        table.float('price');
        table.float('ulearn_coin_price');
        table.float('discount_price');
        table.float('affiliation_price');
        addTimestamps(table);

        references(table, tableNames.main_categories, true, 'main_category')
        references(table, tableNames.sub_categories, true, 'sub_category')

    })
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.questions,
            tableNames.comments,
            tableNames.courses
        ].map(async (tableName) => await knex.schema.dropTableIfExists(tableName)))
}

