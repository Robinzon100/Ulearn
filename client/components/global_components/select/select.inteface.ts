import {GlobalInterface} from "../../../interfaces/global.interface";

export interface SelectInterface extends GlobalInterface {
    type: "radio";
    placeHolder?: string;
    containerStyle?: any;
    value?: string;
    onChange?: any;    
    options?:any,
    dropDownClassName?:string,
    dropDownStyle?:string,
    name?:string
}
