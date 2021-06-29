import { makeObservable, observable } from 'mobx';


interface IComments {
    id:number;
    userId:number;
    course_id:number;
    text:string;
    rating:number;
    likes:number;
    dislikes:number;
    liked_by_instructor:boolean
}


export class CommentStore {
    comment: {
        ratingComments:IComments[]
    }


    constructor() {
        makeObservable(this, {
            comment: observable
        })
    }
}