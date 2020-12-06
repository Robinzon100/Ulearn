import { CSSProperties, ReactNode } from "react";

export interface ButtonInterface {
  title: string;
  className: string;
  backgroudColor?:
    | "btn-blue"
    | "btn-yellow"
    | "btn-green"
    | "btn-red"
    | "btn-white"
    | "btn-black";
  btnSizes?:'small' | 'medium' | 'large';
  linkStyle?: CSSProperties;
  clickHandler?: any;
  loading?: boolean;
  icon?: ReactNode;
  iconStyle?: CSSProperties;
  iconRight?: ReactNode;
  route?: string;
  disabled?: boolean
}
