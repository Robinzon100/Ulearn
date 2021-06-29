import tableNames from "./../../constants/tableNames";
import { Model } from 'objection'
import User from "../user/user.model";



export default class Comment extends Model {

    id!: number;
    user_id!: number;
    course_id!: number;
    like!: number;
    dislike!: number;
    text!: string;
    rating!: any;
    liked_by_instructor!: boolean;


    static get tableName() {
        return tableNames.comments;
    }


    static relationMappings = {
        movies: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
                from: 'comments.id',
                through: {
                    from: 'comments_user.comment_id',
                    to: 'comments_user.user_id'
                },
                to: 'users.id'
            }
        }
    };

    // static get jsonSchema() {
    //     return schema;
    // }
}


