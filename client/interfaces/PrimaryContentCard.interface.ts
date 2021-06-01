  import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";



export interface PrimaryContentCards extends PrimaryContentCardHover{
    id?: number;
    name?: string;
    price?: number;
    discount_price?:number;
    affiliation_price?:number;
    thumbnail_imageUrl?:string;
    video_url?:string;
    duration?:string;
    wywl?:string[];
    student_amount?:number;
    overall_rating?:number;
    detailed_raitting?:any[];
    comments?:string[];
    course_content?:any;
    creator?: string;
    created_at?:string;
    units_sold?:number;
    category_id?:number;
    sub_category_ids?:number[];
    reports?:number[];
    numberOfVotes?: number;
    bestseller?: boolean;
    isLiked?:boolean;
}
