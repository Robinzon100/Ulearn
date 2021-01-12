

export interface IToast {
    text: string | React.ReactNode;
    // placement?: "top" | "bottom" | "left" | "right";
    trigger?: "click" | "hover";
    className?: string;
    children?:any;
    color?:"primary" | "blue" | "yellow" | "green" | "red" | "white" | "black",
    offset:number
}

export interface IToolTipColors  {
    background?:string,
    textColor?:string,
}
