
interface hoverCardDetailList {
    list:string,
}

export interface PrimaryContentCardHover{
    id: number,
    name: string;
    posted: string,
    difficulty:string,
    description:string,
    detailed_description?:string;
    descriptionList:hoverCardDetailList[]
}
