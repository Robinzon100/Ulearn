
interface hoverCardDetailList {
    list:string,
}

export interface PrimaryContentCardHover{
    id?: number,
    uuid?:number,
    name?: string;
    created_at?: string,
    difficulty?:number,
    description?:string,
    detailed_description?:string;
    descriptionList?:hoverCardDetailList[]
}
