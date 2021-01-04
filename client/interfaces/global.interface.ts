import { CSSProperties, ReactNode } from "react";

export interface IGlobal {
    color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black",
    size?:"mini" | "small" | "medium" | "large",
    title?:string,
    className?:string,
    style?:CSSProperties,
    disabled?:boolean,
    loading?:boolean,
    id?:number,
    icon?:ReactNode,
    iconRight?:ReactNode,
    iconStyle?:CSSProperties
}


export interface ILoadingInterface {
    bgColor?:string
    width?:string
    padding?:string
    style?:CSSProperties
}