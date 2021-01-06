import { CSSProperties, MouseEventHandler } from "react";


export interface ICheckBox  {
    color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black",
    size?:"small" | "medium" | "large",
    title?:string,
    className?:string,
    style?:CSSProperties,
    disabled?:boolean,
    loading?:boolean,
    id?:number,
    iconStyle?:CSSProperties
    onClick?:MouseEventHandler<HTMLButtonElement>;
    checkBoxWidth?:string;
    width?:string,
    onChange?:any;
    checked?:boolean
    value?:string | number
}

export interface ICheckBoxSizeGroup {
    padding: string
    fontSize?:string
    iconPosition?:string
}

export interface ICheckBoxStyle  {
    bg?:string
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
    textColor?:string
    border?:string
    iconColor?:string
}

