import {MouseEventHandler} from "react";

import {GlobalInterface} from "../../../interfaces/global.interface";

export interface ButtonInterface extends GlobalInterface {
  stroke?:"primary" | "blue" | "yellow" | "green" | "red" | "black";
  onClick?:MouseEventHandler<HTMLButtonElement>;
  route?: string;
  type?:"submit";
  width?:string,
}

export interface ButtonSizeGroup  {
    padding: string 
    fontSize?:string
    iconPosition?:string
}

export interface ButtonStyleInterface  {
    bg?:string
    defaultShadow?:string
    hoverShadow?:string
    activeShadow?:string
    textColor?:string
    border?:string
    btnBorder?:string,
    iconBoxShadow?:string,
    iconColor?:string,
    loadingColorBg?:string
    bgHover?:string,
    btnShadowDisabled?:string,
}

export interface ButtonLoadingInterface {
    bgColor?:string
    width?:string
    padding?:string
}
