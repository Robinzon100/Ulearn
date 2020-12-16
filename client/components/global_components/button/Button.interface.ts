import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type ButtonInterface = {
  title?: string;
  className?: string;
  color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black";
  size: "mini" | "small" | "medium" | "large";
  stroke?:"primary" | "blue" | "yellow" | "green" | "red" | "black";
  style?: CSSProperties;
  onClick?:MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: ReactNode;
  iconStyle?: CSSProperties;
  iconRight?: ReactNode;
  route?: string;
  disabled?: boolean;
  buttonWidth?:string
}



export type ButtonSizeGroup = {
    height: string
    width: string
    padding: string
    minWidth?: string
    fontSize?:string
    fontFamily?:string
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
