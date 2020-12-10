import { CSSProperties, ReactNode } from "react";



export interface InputInterface {
    color: "default" |"primary" | "blue" | "yellow" | "green" | "red" |  "black";
    type: "text" | "email" | "password" | "number" | "radio";
    size: "mini" | "small" | "medium" | "large";
    placeHolder?: string;
    disabled?: boolean;
    style?: CSSProperties;
    containerStyle?: any;
    value?: string;
    onChange?: any;
    title?: string;
    className?: string;
    id?: number;
    name?: string;
    icon?: ReactNode;
    iconRight?:ReactNode;
    options?:any
    iconStyle?:CSSProperties,
    width?:string,
    
}


export type InputSizeGroup = {
    fontSize?:string,
    padding?:string,
    focusedPadding?:string
}

export type InputStateGroup = {
    defaultBg?:string,
    textColor?:string,
    borderColor:string 
    hoverBg?:string,
    focusedShadow?:string,
    focusedBg?:string
    disabled?:string
}



