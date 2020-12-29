import { MouseEventHandler } from "react";
import {GlobalInterface} from "../../../interfaces/global.interface";

export interface CheckBoxInterface extends GlobalInterface {
    onClick?:MouseEventHandler<HTMLButtonElement>;
    checkBoxWidth?:string;
    width?:string,
    onChange?:any;
    checked?:boolean
    value?:string
    size?:"small" | "medium" | "large",
}

export interface CheckBoxSizeGroupInterface {
    padding: string
    fontSize?:string
    iconPosition?:string
}

export interface CheckBoxStyleInterface  {
    bg?:string
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
    textColor?:string
    border?:string
    iconColor?:string,

}

