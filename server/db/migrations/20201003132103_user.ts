import * as Knex from "knex";
import defaults from "../../constants/defaults";
import tableNames from "../../constants/tableNames";
import { references } from '../lib/table functions/tableUtils';


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.users, table => {
        table.increments('id');
        table.string("full_name", 256);
        table.string('email', 254).notNullable();
        table.string('recovery_email', 254);
        table.string('password', 255);


        table.timestamp('last_login', { precision: 3 });
        table.string('restore_token', 255);
        table.string('token_expiration', 255);
        table.string('image_url', 2048);

        table.json('notifications');
        table.json('paynment_info');
        table.integer('student_amount').defaultTo(defaults.user.student_amount)
        table.integer('review_amount', 255).defaultTo(defaults.user.review_amount)
        table.string('description', 1000)
        table.integer('total_minutes_of_courses').defaultTo(defaults.user.total_minutes_of_courses)
        table.json('detailed_rattings').defaultTo(JSON.stringify(defaults.user.rating_starts))
        table.integer('ratting')
        table.boolean('verified').defaultTo(defaults.user.verified)
        table.boolean('isInstructor').defaultTo(defaults.user.isInstructor)
        table.integer('subscriber_count').defaultTo(defaults.user.subscriber_count)
        table.boolean('show_details_public').defaultTo(defaults.user.show_details_public)
        table.json('personal_detales').defaultTo(JSON.stringify(defaults.user.socials));
        table.json('socials')
        table.json('purchased_courses_Receipts')
        table.integer('Ulearn_coins').defaultTo(defaults.user.Ulearn_coins)
        table.json('last_searched').defaultTo(defaults.user.last_searched)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at', { precision: 3 })
        table.string("affiliate_link", 255)
        table.json("viewed_courses_ids").defaultTo(defaults.user.viewed_courses_ids);

        references(table, tableNames.rating_titles);
        references(table, tableNames.main_categories, true, "favorite_main_category");
        table.json("favorite_sub_category_ids");
        references(table, tableNames.main_categories, true, "generated_categories");
        table.json("generated_sub_category_ids");

        table.json('liked_courses_ids')

        references(table, tableNames.user_types);
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
            tableNames.made_reports,
            tableNames.reports,
            tableNames.users,
        ].map((tableName) => knex.schema.dropTableIfExists(tableName)))
}

