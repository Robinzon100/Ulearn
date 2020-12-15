import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type ButtonInterface = {
  title?: string;
  className?: string;
  color: "primary" | "blue" | "yellow" | "green" | "red" | "white" | "black";
  size: "mini" | "small" | "medium" | "large";
  stroke?:boolean
  linkStyle?: CSSProperties;
  onClick?:MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: ReactNode;
  iconStyle?: CSSProperties;
  iconRight?: ReactNode;
  route?: string;
  disabled?: boolean;
  width?:string
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
    textColor?:string
    border?:string
    btnBorder?:string,
    iconBoxShadow?:string,
    iconColor?:string,
    loadingColorBg?:string
    btnShadow?:string
    
}

export interface HoverState extends ButtonStyleInterface {
    bgHover?:string,
    textColorHover?:string,
    btnIconHover?:string,
    btnShadowDisabled?:string,
}

export interface ActiveState extends ButtonStyleInterface {
    btnTextActive?:string
    btnBgActive?:string
    btnIconActive?:string
    btnShadowActive?:string
}

export interface ButtonLoadingInterface {
    bgColor?:string
    width?:string
    padding?:string
}
