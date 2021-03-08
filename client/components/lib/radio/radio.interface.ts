import { CSSProperties, MouseEventHandler } from "react";



export interface IRadio  {
    color?: "white",
    size?:"small" | "medium" | "large",
    title?:string,
    className?:string,
    style?:CSSProperties,
    disabled?:boolean,
    loading?:boolean,
    id?:number,
    iconStyle?:CSSProperties
    onClick?:MouseEventHandler<HTMLButtonElement>;
    width?:string,
    onChange?:(value:string | number) => any;
    checked:any;
    value?:string | number;
    name?:any;
}

export interface IRadioSizeGroup {
    padding: string;
    fontSize?:string;
    iconPosition?:string;
}

export interface IRadioStyle  {
    bg?:string;
    defaultShadow?:string;
    hoverShadow?:string;
}

