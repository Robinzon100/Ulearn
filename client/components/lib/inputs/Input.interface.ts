
import {IGlobal} from "../../../interfaces/global.interface";


export interface IinputInterface extends IGlobal {
    width:string,
    type: "text" | "email" | "password" | "number";
    placeHolder?: string;
    containerStyle?: any;
    value?: string;
    onChange?: any;    
    name?: string;
}


export interface IinputSizeGroup  {
    fontSize?:string,
    padding?:string,
    focusedPadding?:string
    paddingWithOutIcons?:string
}

export interface IinputStateGroup  {
    defaultBg?:string,
    textColor?:string,
    borderColor:string 
    IconColor?:string
}


