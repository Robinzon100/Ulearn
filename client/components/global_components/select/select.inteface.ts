import { CSSProperties, ReactNode } from "react";


export interface SelectInterface {
    color?: "white" |"primary" | "blue" | "yellow" | "green" | "red" |  "black";
    type: "radio";
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
    icon?: ReactNode;
    iconRight?:ReactNode;
    iconStyle?:CSSProperties,
    width?:string,
    options?:any,
    dropDownClassName?:string,
    dropDownStyle?:string,
}
