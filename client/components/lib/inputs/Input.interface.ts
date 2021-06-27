
import {IGlobal} from "../../../interfaces/global.interface";


export interface IinputInterface extends IGlobal {
    width:string,
    type: "text" | "email" | "password" | "number";
    placeHolder?: string;
    containerStyle?: any;
    value?: string | number ;
    onChange?: any;    
    name?: string;
    filled?: boolean,
    defaultValue?:string
    readonly?:boolean;
    minHeight?:string;
    maxHeight?:string;
    isFocused?:boolean;
    resizable?: boolean;
    characterMaxSize?: number;
    autoComplate?:string;
    maxLength?:number;
    minLength?:number;
}


export interface IinputSizeGroup  {
    fontSize?:string,
    padding?:string,
    focusedPadding?:string
    paddingWithOutIcons?:string
    paddingWithOutIconsOnFocus?:string
}

export interface IinputStateGroup  {
    defaultBg?:string,
    textColor?:string,
    borderColor:string 
    IconColor?:string
    focusedBorder?:string
}



