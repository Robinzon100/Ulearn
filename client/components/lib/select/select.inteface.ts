import { CSSProperties, ReactNode } from "react";
import {IGlobal } from "../../../interfaces/global.interface";

export interface ISelect extends IGlobal {
    size?:"small" | "medium" | "large",
    placeHolder?: string;
    value?: string;
    onChange?: any;
    onClick?:any;    
    options?:any,
    name?:string
    width?:string
    className?:string,
    style?:CSSProperties,
    disabled?:boolean,
    loading?:boolean,
    id?:number,
    maxWidth?:string;
    minWidth?:string;
    icon?:ReactNode,
    iconStyle?:CSSProperties
}


export interface ISelectSizeGroup {
    iconPosition?:string
    iconPadding?:string
    padding?:string
}
export interface ISelectColorGroup {
    iconBgColor?:string
    boxShadow?:string
}