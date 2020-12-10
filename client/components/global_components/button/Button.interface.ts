import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type ButtonInterface = {
  title?: string;
  className?: string;
  color: "primary" | "blue" | "yellow" | "green" | "red" | "white" | "black";
  size: "auto" | "mini" | "small" | "medium" | "large";
  ghost?:boolean
  linkStyle?: CSSProperties;
  onClick?:  MouseEventHandler<HTMLButtonElement>;
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
}

export interface ButtonStyleInterface  {
    bg?:string
    textColor?:string
    border?:string
    borderRadius?:string
    btnBorder?:string,
    iconBoxShadow?:string,
    iconColor?:string,
    boxShadowDefault?:string,
}

export interface HoverState extends ButtonStyleInterface {
    bgHover?:string,
    textColorHover?:string,
    btnBorderHover?:string,
    btnShadowHover?:string,
    btnIconHover?:string,
    btnShadowDisabled?:string,
}

export interface ActiveState extends ButtonStyleInterface {
    btnShadowActive?:string
    btnBorderActive?:string
    btnTextActive?:string
    btnBgActive?:string
    btnIconActive?:string
}

