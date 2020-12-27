
import {GlobalInterface} from "../../../interfaces/global.interface";


export interface InputInterface extends GlobalInterface {
    type: "text" | "email" | "password" | "number";
    placeHolder?: string;
    containerStyle?: any;
    value?: string;
    onChange?: any;    
    name?: string;
}


export type InputSizeGroup = {
    fontSize?:string,
    padding?:string,
    focusedPadding?:string
    paddingWithOutIcons?:string
}

export type InputStateGroup = {
    defaultBg?:string,
    textColor?:string,
    borderColor:string 
    IconColor?:string
}



