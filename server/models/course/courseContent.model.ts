import tableNames from "./../../constants/tableNames";
import { Model } from 'objection'



interface IChapter {
    id: number,
    name: string,
    sub_videos: IVideo[]
}


interface IVideo {
    id: number,
    name: string,
    duration: number,
    video_url: string
}


export default class CourseContent extends Model {
    id!: number;
    uuid!: string;
    curriculum!: IChapter[];
    description!: string;
    resource_file_url!: string;

    static get tableName() {
        return tableNames.course_content;
    }
}


