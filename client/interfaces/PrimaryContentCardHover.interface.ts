
interface hoverCardDetailList {
    descriptionList:string,
}

export interface PrimaryContentCardHover{
    id: number,
    imageUrl:string,
    title:string,
    posted: string,
    difficulty:string,
    description:string,
    hoverCardDetailLists:hoverCardDetailList[]
}
