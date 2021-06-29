import { makeObservable, observable } from 'mobx';
import User from '../../../server/models/user/user.model';


interface IComments {
    id: number;
    user_id: number;
    course_id: number;
    text: string;
    rating: number;
    likes: number;
    dislikes: number;
    liked_by_instructor: boolean,
    user: User
}

interface ICurrentComments {
    text: string,
    rating: number
}


export class CommentStore {
    ratingComments: IComments[]
    currentComment: ICurrentComments
    courseId: number


    constructor() {
        makeObservable(this, {
            ratingComments: observable
        })
    }
}