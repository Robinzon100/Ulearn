import { CSSProperties, ReactNode } from "react";

export interface ButtonInterface {
  title?: string;
  className?: string;
  color?: "primary" | "blue" | "yellow" | "green" | "red" | "white" | "black";
  size?: "auto" | "mini" | "small" | "medium" | "large";
  ghost?:boolean
  linkStyle?: CSSProperties;
  onClick?: any;
  loading?: boolean;
  icon?: ReactNode;
  iconStyle?: CSSProperties;
  iconRight?: ReactNode;
  route?: string;
  disabled?: boolean;
}
