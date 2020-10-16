  import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";



export interface PrimaryContentCards extends  PrimaryContentCardHover{
    id: number;
    title: string;
    author: string;
    raiting: number;
    numberOfVotes: number;
    bestseller: boolean;
    price: number;
    newPrice: number | boolean;
    isLiked:boolean
    
}
