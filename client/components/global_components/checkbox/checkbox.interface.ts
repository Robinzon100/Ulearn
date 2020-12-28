import { MouseEventHandler } from "react";
import {GlobalInterface} from "../../../interfaces/global.interface";

export interface CheckBoxInterface extends GlobalInterface {
    onClick?:MouseEventHandler<HTMLButtonElement>;
    checkBoxWidth?:string;
    width:string,
    onChange?:any;
    checked:boolean
}

export interface CheckBoxSizeGroupInterface {
    padding: string
    fontSize?:string
}

export interface CheckBoxStyleInterface  {
    bg?:string
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
    textColor?:string
    border?:string
    checkBoxBorder?:string,
    iconColor?:string,
    loadingColorBg?:string
    bgHover?:string,
    checkBoxShadowDisabled?:string,
}

