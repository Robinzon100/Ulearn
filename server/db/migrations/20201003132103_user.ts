import * as Knex from "knex";
import tableNames from "../../constants/tableNames";
import { references } from '../lib/table functions/tableUtils';


export async function up(knex: Knex): Promise<void> {
 
    await knex.schema.createTable(tableNames.users, table => {
        table.increments('id');
        table.string("full_name", 256);
        table.string('email', 254).notNullable();
        table.string('recovery_email', 254);
        table.string('password', 255);

        references(table, tableNames.user_types);

        table.timestamp('last_login', { precision: 3 });
        table.string('restore_token', 255);
        table.string('token_expiration', 255);
        table.string('image_url', 2048);

        table.json('notifications');
        table.json('paynment_info');
        table.integer('student_amount').defaultTo(0)
        table.integer('review_amount', 255).defaultTo(0)
        table.string('description', 1000)
        table.integer('total_hours_of_courses').defaultTo(0)
        table.json('detailed_rattings').defaultTo(JSON.stringify({ "5": 0, "4": 0, "3": 0, "2": 0, "1": 0, "0": 0 }))
        table.integer('ratting')
        table.boolean('verified')
        table.integer('subscriber_count').defaultTo(0)
        table.boolean('show_details_public')
        table.json('personal_detales')
        table.json('socials')
        table.json('purchased_courses_Receipts')
        table.integer('Ulearn_coins')
        table.json('last_searched').defaultTo([])
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at', { precision: 3 })
        table.string("affiliate_link", 255)
        table.json("viewed_courses_ids").defaultTo([]);
        table.json("subscribed_instructor_ids").defaultTo([]);

        references(table, tableNames.rating_titles);
        references(table, tableNames.main_categories, true, "favorite_main_category");
        table.json("favorite_sub_category_ids");
        references(table, tableNames.main_categories, true, "generated_categories");
        table.json("generated_sub_category_ids");

        table.json('liked_courses_ids')


    })


}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(tableNames.made_reports)
    await knex.schema.dropTable(tableNames.reports)
    await knex.schema.dropTable(tableNames.users)
}

