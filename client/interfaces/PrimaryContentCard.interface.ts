// import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";



import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";


export interface PrimaryContentCards {
    id: number;
    title: string;
    author: string;
    raiting: number;
    numberOfVotes: number;
    bestseller: string;
    price: number;
    newPrice: number | boolean;
    imageUrl:string
    isLiked:boolean,
    // PrimaryContentCardHovers:PrimaryContentCardHover[]
    
}