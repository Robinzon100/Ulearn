

import {CheckBoxSizeGroupInterface,CheckBoxStyleInterface} from "./checkbox.interface";


 
 export const getCheckBoxSize = (size: string): CheckBoxSizeGroupInterface => {
   const layouts = {
     mini: {
       padding: "var(--mini-button-padding)",
       fontSize: "var(--mini-button-fontSize)",
       
     },
     small: {
       padding: "var(--small-button-padding)",
       fontSize: "var(--small-button-fontSize)",

     },
     medium: {
       padding: "16px 74px",
       fontSize: "var(--medium-button-fontSize)",

     },
     large: {
       padding: "var(--large-button-padding)",
       fontSize: "var(--large-button-fontSize)",

     },
   };
 
   if (!size) return layouts.medium;
 
   return layouts[size];
 };
 