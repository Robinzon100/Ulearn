import {ItoastColors,ItoastSizeGroup} from "./toast.interface";

const colors = {
    primary: {
        background: "var(--primary-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--primary-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-primary-shadow),0.73)",
      },
      blue: {
        background: "var(--blue-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--blue-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--blue-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-blue-shadow),0.73)",
      },
      yellow: {
        background: "var(--yellow-button--gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--yellow-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--yellow-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-yellow-shadow),0.73)",
      },
      green: {
        background: "var(--green-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--green-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--green-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-green-shadow),0.73)",
      },
      red: {
        background: "var(--red-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--red-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--red-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-red-shadow),0.73)",
      },
      black: {
        background: "var(--black-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--black-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--black-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-black-active),0.73)",
      },
      white: {
        background: "var(--primary-white-button-gradient)",
        defaultShadow: "var(--btn-shadow) rgba(var(--primary-white-shadow--rgb),0.2)",
        hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-white-shadow--rgb),0.45)",
        activeShadow:"var(--btn-active-shadow) rgba(var(--btn-white-shadow),0.73)",
      }
}

export const getColors = (color: string): ItoastColors => {
    if (!color) return colors.white;
    return colors[color]
}



export const getToastSize = (size: string): ItoastSizeGroup => {
    const layouts = {
      medium: {
        padding: "var(--toast-medium)",
      },
      large: {
        padding: "var(--toast-large)",
      },
    };
  
    if (!size) return layouts.medium;
  
    return layouts[size];
  };