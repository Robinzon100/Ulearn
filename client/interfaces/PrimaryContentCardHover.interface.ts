
interface hoverCardDetailList {
    list:string,
}

export interface PrimaryContentCardHover{
    id: number,
    imageUrl:string,
    title:string,
    posted: string,
    difficulty:string,
    description:string,
    descriptionList:hoverCardDetailList[]
}
