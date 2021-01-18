export interface Itoast  {
    title?:string;
    delay?:number;
    color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black";
    width?:string;
    size?:"large" | "small";
}

export interface ItoastColors  {
    background?:string,
    textColor?:string,
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
}

export interface ItoastSizeGroup {
    padding?:string;
}