
import tableNames from "../../constants/tableNames";
import { references } from '../lib/table functions/tableUtils';
import { comment } from "../../constants/defaults";

export async function up(knex: any): Promise<void> {
    await knex.schema.createTable(tableNames.questions, (table:any) => {
        table.bigIncrements();
        references(table, tableNames.users, true, "user");
        references(table, tableNames.courses, true, "course");
        table.string("text", 1000);
        table.integer("likes").defaultTo(comment.likes);
        table.integer("dislikes").defaultTo(comment.dislikes);
        table.jsonb("replies");
    });


    await knex.schema.createTable(tableNames.comments, (table:any) => {
        table.bigIncrements();
        references(table, tableNames.users, true, "user");
        references(table, tableNames.courses, true, "course");
        table.string("text", 1000);
        table.float("rating");
        table.integer("likes").defaultTo(comment.likes);
        table.integer("dislikes").defaultTo(comment.dislikes);
        table.boolean("liked_by_instructor").defaultTo(comment.liked_by_instructor);
    })
}


export async function down(knex: any): Promise<void> {

}

