import { CSSProperties, ReactNode} from "react";


export interface ButtonInterface {
    title: string;
    className: string;
    linkStyle?: CSSProperties;
    Clickhandler?: any;
    loading?: boolean;
    icon?: ReactNode;
    iconStyle?: CSSProperties;
    iconRight?: ReactNode;
    route?: string;
}

