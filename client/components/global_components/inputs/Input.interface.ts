import { CSSProperties, ReactNode } from "react";



export interface InputInterface {
    placeHolder?: string;
    type: "text" | "email" | "password" | "number" | "radio";
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
    options?:any
    iconStyle?:CSSProperties
}


