import { CSSProperties, MouseEventHandler } from "react";


export interface ICheckBox  {
    key?:any;
    color?: "white";
    size:"small" | "medium" | "large";
    title:string;
    className?:string;
    style?:CSSProperties;
    disabled?:boolean;
    loading?:boolean;
    id?:number;
    iconStyle?:CSSProperties
    onClick?:MouseEventHandler<HTMLButtonElement>;
    width?:string;
    onChange:(value) => any;
    checked:boolean;
    value:string | number;
}

export interface ICheckBoxSizeGroup {
    padding: string;
    fontSize?:string;
    iconPosition?:string;
}

export interface ICheckBoxStyle  {
    bg?:string;
    defaultShadow?:string;
    hoverShadow?:string;
}

