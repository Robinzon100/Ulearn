
interface cardDetailList {
    descriptionList:string,
}

export interface PrimaryContentCardHover{
    id: number,
    imgUrl:string,
    title:string,
    posted: string,
    difficulty:string,
    description:string,
    list:cardDetailList[]
}
