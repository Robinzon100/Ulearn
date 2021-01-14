import { ReactNode } from "react";


export interface IToast {
    text: string | ReactNode;
    // placement?: "top" | "bottom" | "left" | "right";
    trigger?: "click" | "hover";
    className?: string;
    children?:any;
    color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black",
    offset:number
    tooltipWidth?:string
}

export interface IToolTipColors  {
    background?:string,
    textColor?:string,
}
