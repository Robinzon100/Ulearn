import * as Knex from "knex";
import { user } from "../../constants/defaults";
import tableNames from "../../constants/tableNames";
import { references, addTimestamps } from '../lib/table functions/tableUtils';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.users, table => {
        table.increments('id');
        table.string("full_name", 256).notNullable();
        table.string('email', 254).notNullable().notNullable();
        table.string('password', 255).notNullable();
        table.string('recovery_email', 254);
        table.string('description', 1000)

        // TODO: shecvale socials da piradi infos defaults
        // TODO: shecvale categories

        table.timestamp('last_login', { precision: 2 }).defaultTo(knex.fn.now());
        table.string('restore_token', 255);
        table.string('token_expiration', 255);
        table.string('image_url', 2048);

        table.json('notifications').defaultTo(user.notifications);
        table.json('paynment_info');
        table.integer('student_amount').defaultTo(user.student_amount)
        table.integer('review_amount', 255).defaultTo(user.review_amount)
        table.integer('total_minutes_of_courses').defaultTo(user.total_minutes_of_courses)
        table.json('detailed_ratings').defaultTo(JSON.stringify(user.rating_starts))
        table.integer('rating')
        table.boolean('verified').defaultTo(user.verified)
        table.boolean('isInstructor').defaultTo(user.isInstructor)
        table.integer('subscriber_count').defaultTo(user.subscriber_count)
        table.boolean('show_details_public').defaultTo(user.show_details_public)
        table.json('personal_detales');
        table.json('socials').defaultTo(JSON.stringify(user.socials))
        table.json('purchased_courses_Receipts')
        table.integer('Ulearn_coins').defaultTo(user.Ulearn_coins)
        table.json('last_searched').defaultTo(user.last_searched)
        table.string("affiliate_link", 255)
        table.json("viewed_courses_ids").defaultTo(user.viewed_courses_ids);

        references(table, tableNames.rating_titles, true, "rating_title");
        references(table, tableNames.main_categories, true, "favorite_main_category");
        references(table, tableNames.main_categories, true, "instructor_category");
        references(table, tableNames.user_types, true, 'user_type');
        table.json("favorite_main_category_ids");
        table.json("favorite_sub_category_ids");
        table.json("generated_sub_category_ids");
        table.json("generated_categories_ids");
        table.json('liked_courses_ids')

        addTimestamps(table);
    })

    await knex.schema.createTable(tableNames.subscriptions, table => {
        table.increments('id');
        references(table, tableNames.users, true, "user");
        references(table, tableNames.users, true, "instructor");
    })
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all(
        [
            tableNames.subscriptions,
            tableNames.made_reports,
            tableNames.reports,
            tableNames.users,
        ].map((tableName) => knex.schema.dropTableIfExists(tableName)))
}

