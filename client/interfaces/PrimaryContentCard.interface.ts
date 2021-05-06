  import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";



export interface PrimaryContentCards extends PrimaryContentCardHover{
    id: number;
    name: string;
    price: number;
    discount_price?:number;
    affiliation_price?:number;
    image_url:string;
    video_url?:string;
    duration?:string;
    wywl?:string[];
    student_amount?:number;
    overall_ratting?:number;
    detailed_raitting?:any[];
    comments?:string[];
    course_content?:any;
    creator: any;
    created_at?:number;
    units_sold?:number;
    category_id?:number;
    sub_category_ids?:number[];
    reports?:number[];
    raiting: number;
    numberOfVotes: number;
    bestseller: boolean;
    newPrice: number | boolean;
    isLiked:boolean;
}
