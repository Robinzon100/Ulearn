import {MouseEventHandler} from "react";

import { IGlobal } from "../../../interfaces/global.interface";

export interface ButtonInterface extends IGlobal {
  stroke?:"primary" | "blue" | "yellow" | "green" | "red" | "black";
  onClick?:MouseEventHandler<HTMLButtonElement>;
  route?: string;
  type?:"submit";
  width?:string,
  children?:any
  maxWidth?:string;
}

export interface ButtonSizeGroup  {
    padding: string 
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

export interface ButtonILoadingInterface {
    bgColor?:string
    width?:string
    padding?:string
}
