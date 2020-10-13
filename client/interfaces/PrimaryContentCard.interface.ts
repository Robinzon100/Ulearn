//  import {PrimaryContentCardHover} from "./PrimaryContentCardHover.interface";


interface hoverCardDetailList {
    id:number
    descriptionList:string,
}

export interface PrimaryContentCards {
    id: number;
    title: string;
    author: string;
    raiting: number;
    numberOfVotes: number;
    bestseller: boolean;
    price: number;
    newPrice: number | boolean;
    imageUrl:string
    isLiked:boolean,
    posted:string,
    difficulty:string,
    description:string,
    descriptionList:hoverCardDetailList[],
    
}