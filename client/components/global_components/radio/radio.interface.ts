import { CSSProperties, MouseEventHandler } from "react";



export interface RadioInterface  {
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
    radioWidth?:string;
    width?:string,
    onChange?:any;
    checked?:boolean
    value?:string
}

export interface RadioSizeGroupInterface {
    padding: string
    fontSize?:string
    iconPosition?:string
}

export interface RadioStyleInterface  {
    bg?:string
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
    textColor?:string
    border?:string
    iconColor?:string
}

